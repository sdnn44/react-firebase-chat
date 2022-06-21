import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <> 
          <Header />
          <div className="app_container">
            <Sidebar></Sidebar>
            <Chat></Chat>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
