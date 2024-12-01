import React from "react";
import "./ProfileComponent.css";

const CustomerCard = () => {
  return (
    <div className="customer-card">
      <div className="header">
        <div className="avatar">CB</div>
        <div className="details">
          <h2>Hannibal Smith</h2>
          <p>1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>
      <div className="section">
        <div className="item">
          <span>Customer ID</span>
          <span>12345</span>
        </div>
        <div className="item">
          <span>Email Address</span>
          <span>rachel@sample.com</span>
        </div>
        <div className="item">
          <span>Phone Number</span>
          <span>8051298905</span>
        </div>
        <button className="add-btn">+ Add</button>
      </div>
      <div className="section">
        <div className="item">
          <span>Loyalty Tier</span>
          <span>Silver</span>
        </div>
        <div className="item">
          <span>Segment</span>
          <span>Sleepy Customer</span>
        </div>
        <button className="add-btn">+ Add</button>
      </div>
      <div className="section">
        <div className="item">
          <span>Lifetime Value</span>
          <span>$1M</span>
        </div>
        <div className="item">
          <span>Propensity to Purchase</span>
          <span>75%</span>
        </div>
        <button className="add-btn">+ Add</button>
      </div>
      <div className="section">
        <div className="item">
          <span>Engagement Score</span>
          <span>80%</span>
        </div>
        <button className="add-btn">+ Add</button>
      </div>
      <div className="footer">
        <button className="assign-btn">Assign other Agent</button>
        <button className="add-widget-btn">Add New Widget</button>
      </div>
    </div>
  );
};

export default CustomerCard;
