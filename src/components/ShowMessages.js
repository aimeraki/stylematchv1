/*

App - Stylematch
Ver - 1.0
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.
This component just displays two labels .. temporary implementation
*/

import React from 'react';

const ShowMessages = ({ label1, label2 }) => {
  return (
    <div>
      <label>user: {label1}</label><br/>
      <label>AI: {label2}</label>
    </div>
  );
};

export default ShowMessages;