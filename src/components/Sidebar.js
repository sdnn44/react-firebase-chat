import React from "react";
import "../css/Sidebar.css";
import { Avatar } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [rooms, loading, error] = useCollection(db.collection("rooms")); // rooms contains collection of rooms
  const [user] = useAuthState(auth);
  return (
    <div className="sidebar_container">
      <div className="sidebar_header">
        <h2>Workspace</h2>
        <div className="sidebar_info">
          <Avatar
            className="user_avatar"
            alt="Some User"
            src={user?.photoURL}
          ></Avatar>
          <h3>{user?.displayName}</h3>
        </div>
      </div>
      <hr />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="More channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

      {rooms?.docs.map((channel) => (
        <SidebarOption
          key={channel.id}
          id={channel.id}
          title={channel.data().name}
        />
      ))}
    </div>
  );
}

export default Sidebar;
