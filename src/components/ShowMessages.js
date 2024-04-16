/*

App - Stylematch
Ver - 1.0
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.
This component just displays two labels .. temporary implementation
*/

import React from 'react';
import './ShowMessages.scss'; // Import the Pico SASS file for styling

const ShowMessages = ({ label1, label2 }) => {
  return (
    <div className="message-container">
      <div className="message user-message">
        <span className="message-label">User:</span>
        <span className="message-content">{label1}</span>
      </div>
      <div className="message ai-message">
        <span className="message-label">AI:</span>
        <span className="message-content">{label2}</span>
      </div>
    </div>
  );
};

export default ShowMessages;