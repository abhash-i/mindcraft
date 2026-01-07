import React from 'react';
import './TitleBar.css';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="title-bar-menu">
        <img src="/vite.svg" alt="logo" className="window-icon" style={{width: '18px', filter: 'grayscale(100%) brightness(1.5)'}} />
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>...</span>
      </div>
      <div className="title-bar-title">
        <div className="search-box">
             my-web-app
        </div>
      </div>
      <div className="title-bar-controls">
        <div className="control-btn"><VscChromeMinimize /></div>
        <div className="control-btn"><VscChromeMaximize /></div>
        <div className="control-btn close-btn"><VscChromeClose /></div>
      </div>
    </div>
  );
};

export default TitleBar;
