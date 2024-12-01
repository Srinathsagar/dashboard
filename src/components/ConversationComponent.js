// ConversationComponent.jsx
import React, { useState } from "react";
import "./ConversationComponent.css";

const ConversationComponent = () => {
  const [activeTab, setActiveTab] = useState("Conversation");

  const tabs = [
    { id: 1, name: "Conversation" },
    { id: 2, name: "Address Update" },
    { id: 3, name: "Fee Reversal" },
    { id: 4, name: "Retail" },
  ];

  return (
    <div className="conversation-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.name ? "active" : ""}`}
          >
            <span className="tab-name" onClick={() => setActiveTab(tab.name)}>
              {tab.name}
            </span>
            <button className="delete-btn">✖</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationComponent;
