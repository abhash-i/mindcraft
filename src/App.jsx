import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import './App.css';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscMenu } from 'react-icons/vsc';

function App() {
  const [activeActivity, setActiveActivity] = useState('files');

  return (
    <div className="app-container">
      {/* Title Bar (Mobile/Web) */}
      <div className="title-bar">
        <div className="title-bar-left">
           <img src="/vite.svg" className="app-icon" alt="icon" style={{width: 18, marginRight: 8}} />
           <span className="menu-item">File</span>
           <span className="menu-item">Edit</span>
           <span className="menu-item">Selection</span>
           <span className="menu-item">View</span>
           <span className="menu-item">Go</span>
           <span className="menu-item">Run</span>
           <span className="menu-item">...</span>
        </div>
        <div className="title-bar-center">
          <div className="search-box">
             <VscSearch />
             <span>my-web-app</span>
          </div>
        </div>
        <div className="title-bar-right">
           <div className="window-controls">
             <span className="control minimize"></span>
             <span className="control maximize"></span>
             <span className="control close"></span>
           </div>
        </div>
      </div>

      <div className="main-layout">
        {/* Activity Bar */}
        <div className="activity-bar">
          <div className="activity-top">
            <div className={`activity-icon ${activeActivity === 'files' ? 'active' : ''}`} onClick={() => setActiveActivity('files')}><VscFiles size={24} /></div>
            <div className={`activity-icon ${activeActivity === 'search' ? 'active' : ''}`} onClick={() => setActiveActivity('search')}><VscSearch size={24} /></div>
            <div className={`activity-icon ${activeActivity === 'git' ? 'active' : ''}`} onClick={() => setActiveActivity('git')}><VscSourceControl size={24} /></div>
            <div className={`activity-icon ${activeActivity === 'debug' ? 'active' : ''}`} onClick={() => setActiveActivity('debug')}><VscDebugAlt size={24} /></div>
            <div className={`activity-icon ${activeActivity === 'extensions' ? 'active' : ''}`} onClick={() => setActiveActivity('extensions')}><VscExtensions size={24} /></div>
          </div>
          <div className="activity-bottom">
            <div className="activity-icon"><VscAccount size={24} /></div>
            <div className="activity-icon"><VscSettingsGear size={24} /></div>
          </div>
        </div>

        {/* Sidebar (Mock) */}
        {/* <div className="sidebar">
           Explorer
        </div> */}

        {/* Editor Area */}
        <div className="editor-area">
          <div className="tab-bar">
            <div className="tab active">
              <img src="/vite.svg" width="14" style={{marginRight: 6}} />
              <span>Welcome</span>
              <span className="close-tab">×</span>
            </div>
          </div>
          <div className="editor-content">
             <WelcomePage />
          </div>

          {/* Status Bar */}
          <div className="status-bar">
             <div className="status-left">
                <span className="status-item"><VscSourceControl /> main</span>
                <span className="status-item">0 ⚠ 0</span>
             </div>
             <div className="status-right">
                <span className="status-item">Ln 1, Col 1</span>
                <span className="status-item">UTF-8</span>
                <span className="status-item">JavaScript</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
