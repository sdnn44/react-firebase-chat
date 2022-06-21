import React, { useRef } from "react";
import "../css/ChatInput.css";
import Button from "@material-ui/core/Button";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ chatRef, channelName, channelId }) {
  const inputRef = useRef(null);
  const [user] = useAuthState(auth);
  const sendMessage = (event) => {
    event.preventDefault();

    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    // this.refs.inputRef.value = '';
  };

  return (
    <div className="chat_input_container">
      <form>
        <input
          ref={inputRef}
          placeholder={`Message to channel # ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
