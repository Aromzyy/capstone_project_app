// MIssionPanel.js

import React from 'react';
import './MissionPanel.css'; 
import missionImage from '/Users/aromaatieno/Downloads/Capstone_Suppler_App 2/frontend/src/women.jpeg'; 
import { useNavigate } from 'react-router-dom';


function MissionPanel() {
  const navigate = useNavigate();
  return (
    <div className="mission-container">
      <div className="mission-text-section">
        <h1>Our Mission</h1>
        <p>We are on a mission to ensure that everyone gets the information they need to take care of their skin, no matter their financial status or location</p>
        <button onClick={() => navigate('/about')} className='mission-button'>Discover more about us</button>
      </div>
      <div className="mission-image-section">
        <img src={missionImage} alt="Skincare" />
      </div>
    </div>
  );
}

export default MissionPanel;




