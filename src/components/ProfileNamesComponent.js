// ProfileNamesComponent.jsx
import React, { useState } from "react";
import "./ProfileNamesComponent.css";

const ProfileNamesComponent = () => {
  const [activeCard, setActiveCard] = useState("Messaging");

  const profiles = [
    { id: 1, name: "Cheyenne Bergson", abbreviation: "CB" },
    { id: 2, name: "Jonathan Higgins", abbreviation: "JH" },
    { id: 3, name: "Capt. Trunk", abbreviation: "CT" },
    { id: 4, name: "Hannibal Smith", abbreviation: "HS" },
    { id: 5, name: "Palak Bansal", abbreviation: "PB" },
    { id: 6, name: "Rachel Adams", abbreviation: "RA" },
  ];

  return (
    <div className="profile-names-container">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className={`profile-card ${
            activeCard === profile.name ? "active" : ""
          }`}
          onClick={() => setActiveCard(profile.name)}
        >
          <div className="profile-circle">{profile.abbreviation}</div>
          <span className="profile-name">{profile.name}</span>
        </div>
      ))}

      <div className="profile-card msg">
        <div className="profile-circle">M</div>
        <span className="profile-name ">Messaging</span>
      </div>
    </div>
  );
};

export default ProfileNamesComponent;
