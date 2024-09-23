import React from 'react';
import '../../App';
import './HomeDisplay.css';

function HomeDisplay() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-9.mp4' autoPlay loop muted />
      <h1 >Daniel Rivera </h1>
      <h2 >Site Reliability Engineer | USMC Veteran</h2>
    </div>
  );
}

export default HomeDisplay;
