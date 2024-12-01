import React from "react";
import "./MessagingSection.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Ask Catura Section */}
      <div className="card ask-catura">
        <div className="header">
          <h3>Ask Catura</h3>
          <div className="icons">
            <span>📩 WhatsApp</span>
            <span>📨 Greetings</span>
          </div>
        </div>
        <div className="content">
          <div className="template-box">
            <p>Greeting Template</p>
            <div className="buttons">
              <button className="btn">Copy to Send</button>
              <button className="btn">Preview</button>
            </div>
          </div>
          <div className="message-input">
            <input type="text" placeholder="Type a message..." />
            <button className="send-btn">➤</button>
          </div>
        </div>
      </div>

      {/* Action Launcher Section */}
      <div className="card action-launcher">
        <h3>Action Launcher</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search actions..." />
        </div>
        <div className="actions">
          <button className="action-btn blue">+ Add Action</button>
          <button className="action-btn">Fee Reversal</button>
          <button className="action-btn">Retail Onboarding</button>
          <button className="action-btn">Address Update</button>
        </div>
      </div>

      {/* Case Favorite Section */}
      <div className="card case-favorite">
        <h3>Case Favorite</h3>
        <div className="case-item">
          Lorem ipsum dolor sit amet consectetur. Et tincidunt
        </div>
        <div className="case-item">📷 Photo</div>
        <div className="case-item">
          Lorem ipsum dolor sit amet consectetur. Et tincidunt
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
