import React, { useState } from 'react';
import './WelcomePage.css';
import {
  VscNewFile, VscFolderOpened, VscRepoClone, VscRemote,
  VscCheck, VscClose
} from 'react-icons/vsc';

const WelcomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <h1>Visual Studio Code</h1>
        <p className="subtitle">Editing evolved</p>
      </div>

      <div className="welcome-content">
        <div className="column start-column">
          <h2>Start</h2>
          <ul>
            <li><a href="#"><span className="icon"><VscNewFile /></span> New File...</a></li>
            <li><a href="#"><span className="icon"><VscFolderOpened /></span> Open File...</a></li>
            <li><a href="#"><span className="icon"><VscFolderOpened /></span> Open Folder...</a></li>
            <li><a href="#"><span className="icon"><VscRepoClone /></span> Clone Git Repository...</a></li>
            <li><a href="#"><span className="icon"><VscRemote /></span> Connect to...</a></li>
          </ul>

          <div className="recent-section">
            <h2>Recent</h2>
            <p className="no-recent">You have no recent folders, <a href="#">open a folder</a> to start.</p>
          </div>
        </div>

        <div className="column walkthroughs-column">
          <h2>Walkthroughs</h2>
          <div className="walkthrough-card">
             <div className="walkthrough-icon">★</div>
             <div className="walkthrough-text">
                <h3>Get Started with VS Code</h3>
                <p>Customize your editor, learn the basics, and start coding</p>
             </div>
          </div>
           <div className="walkthrough-card">
             <div className="walkthrough-icon">💡</div>
             <div className="walkthrough-text">
                <h3>Learn the Fundamentals</h3>
             </div>
          </div>
           <div className="walkthrough-card">
             <div className="walkthrough-icon">🤖</div>
             <div className="walkthrough-text">
                <h3>GitHub Copilot <span className="tag">Updated</span></h3>
             </div>
          </div>
           <div className="walkthrough-card">
             <div className="walkthrough-icon">🐍</div>
             <div className="walkthrough-text">
                <h3>Get Started with Python Development <span className="tag">Updated</span></h3>
             </div>
          </div>
           <div className="walkthrough-card">
             <div className="walkthrough-icon">📓</div>
             <div className="walkthrough-text">
                <h3>Get Started with Jupyter Notebooks <span className="tag">Updated</span></h3>
             </div>
          </div>
          <a href="#" className="more-link">More...</a>
        </div>
      </div>

      <div className="welcome-footer">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={showWelcome}
            onChange={() => setShowWelcome(!showWelcome)}
          />
          <span className="checkmark">{showWelcome && <VscCheck />}</span>
          Show welcome page on startup
        </label>
      </div>
    </div>
  );
};

export default WelcomePage;
