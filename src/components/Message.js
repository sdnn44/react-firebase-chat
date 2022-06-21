import React from "react";
import "../css/Message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message_container">
      <img src={userImage} alt="" />
      <div className="message_details">
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
