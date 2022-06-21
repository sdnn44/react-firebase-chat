import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import "../css/Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login_container">
      <div className="login_inner">
        <Avatar className="login_avatar" alt="Some User" src=""></Avatar>

        <h1>Sign in to chat-app</h1>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
