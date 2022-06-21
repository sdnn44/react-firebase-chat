import React, { useEffect, useRef } from "react";
import "../css/Chat.css";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux/es/exports";

import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <div className="chat_container">
      <div className="chat_header">
        <h4>
          <strong># {roomDetails?.data().name}</strong>
        </h4>
      </div>

      <div className="chat_content">
        {roomMessages?.docs.map((messages) => {
          const { message, timestamp, user, userImage } = messages.data();

          return (
            <Message
              key={messages.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
      </div>
      <div ref={chatRef} className="chat_bottom"></div>
      <div className="chat_messages">
        <ChatInput
          chatRef={chatRef}
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </div>
    </div>
  );
}

export default Chat;
