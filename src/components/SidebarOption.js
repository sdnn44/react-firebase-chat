import React from "react";
import { useDispatch } from "react-redux";
import "../css/SidebarOption.css";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarOption({ Icon, addChannelOption, title, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Enter valid channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <div
      className="sidebar_option_container"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebar_option_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebar_option_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
