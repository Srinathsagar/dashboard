import React from "react";
import ProfileNamesComponent from "./ProfileNamesComponent";
import Header from "./Header";
import ProfileComponent from "./ProfileComponent";
import ChatSession from "./ChatSession.js";
import MessagingSection from "./MessagingSection";
import "./main.css";

const Main = () => {
  return (
    <div className="main-section">
      <Header />
      <div className="main-content">
        <ProfileNamesComponent />
        <div className="three-side">
          <div className="profile-section">
            <ProfileComponent />
          </div>
          <div className="chat-section">
            <ChatSession />
          </div>
          <div className="messaging-section">
            <MessagingSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
