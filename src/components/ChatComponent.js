import React from "react";
import "./ChatComponent.css";

const Conversation = () => {
  return (
    <div className="conversation-container">
      {/* Tabs */}
      <div className="tabs">
        <div className="tab active">Conversation</div>
        <div className="tab">Attachment</div>
      </div>

      {/* Conversation Section */}
      <div className="conversation">
        <div className="message">
          <div className="timeline"></div>
          <div className="message-bubble">
            <div className="header">
              <div className="avatar">CB</div>
              <div className="meta">
                <strong>Rachel Adams</strong>
                <span>9:08 PM &middot; Received By WhatsApp</span>
                <span className="status">✔</span>
              </div>
            </div>
            <p className="message-content">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent
              imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
              dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>
        </div>

        <div className="message">
          <div className="timeline"></div>
          <div className="message-bubble">
            <div className="header">
              <div className="avatar you">HK</div>
              <div className="meta">
                <strong>You</strong>
                <span>27Jul, 2024 &middot; Sent By WhatsApp</span>
                <span className="status">✔</span>
              </div>
            </div>
            <p className="message-content">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus
              ac aliquam. Placerat maecenas quis ut elementum praesent
              imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
              dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="checkboxes">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Type a message..." />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
