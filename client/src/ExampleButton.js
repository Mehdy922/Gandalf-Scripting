// ExampleButton.js
import React from 'react';

const ExampleButton = () => {
  const handleButtonClick = async () => {
    try {
      // Make an API request to the server
      const response = await fetch('http://localhost:3001/api/play-video');
      const data = await response.json();

      // Log the response from the server
      console.log(data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Click me to play the video on all devices!
    </button>
  );
};

export default ExampleButton;
