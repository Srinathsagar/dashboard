import React from "react";
import ChatComponent from "./ChatComponent";
// import ConversationComponent from "./ConversationComponent";
import "./ChatSession.css";
export default function ChatSession() {
  return (
    <div className="session">
      {/* <ConversationComponent /> */}
      <ChatComponent />
    </div>
  );
}
