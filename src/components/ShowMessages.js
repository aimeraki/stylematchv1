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
import user from '../images/user.png';
import bot from '../images/bot.png';
import noimage from '../images/no-image.png';

const ShowMessages = ({ label1, label2, img }) => {

  // let us check to see if img is not empty string
  let img_to_display = noimage;

  if (typeof img === "string" && img.length !== 0) {
     img_to_display = img
  };

  //const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAABhklEQVR42u3XsQ3CMAwF0Kl/qcIJoAAJElx6PwBzW/VEjb2AKdqk7jPvbd0C9Hh2mf11r5k8zMN0GGQ7k2CGX8cYEDhnVywQwmzWC3IdO00A7IhoQjGKwWJqyhM0DiY8LhMAKzBgAz7p6Sbfw5X3gCRymkTi0ALF0IAy0HgCltX5QAdPh3BEWALnS6gKNwaAboOZcCDht1ChBwBu1C2Dzv//gCKyI0X8MgCXwAAAABJRU5ErkJggg==';
  return (
    <div className="message-container">
      <div className="message user-message">
        {label1 !== '' && (
          <>
            <img src={user} alt="user" className='avatar' />
            <span className="message-content">{label1}</span>
          </>
        )}
      </div>
      <div className="message ai-message">
        {label2 !== '' && (
          <>
            <img src={bot} alt="bot" className='avatar' />
            <span className="message-content">{label2}<br/></span>
            <img src={img_to_display} alt="temp_img" />
          </>
        )}

      </div>
    </div>
  );
};

export default ShowMessages;