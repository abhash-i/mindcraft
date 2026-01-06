import React from 'react';
import './WelcomePage.css';
import { VscNewFile, VscFolderOpened, VscRepoClone, VscRemote } from 'react-icons/vsc';

const WelcomePage = () => {
  const handleAction = (action) => {
    console.log(`Action triggered: ${action}`);
    // Ideally this would use a toast notification
    alert(`Triggered: ${action}`);
  };

  return (
    <div className="welcome-container">
      <div className="watermark">
        <svg viewBox="0 0 100 100" className="watermark-svg">
           {/* Abstract VS Code logo shape or similar */}
           <path d="M20 50 L40 20 L80 50 L40 80 Z" fill="none" stroke="#2b2b2b" strokeWidth="2" />
        </svg>
      </div>

      <div className="welcome-content">
        <div className="header-section">
          <h1>Visual Studio Code</h1>
          <h2>Editing evolved</h2>
        </div>

        <div className="content-columns">
          <div className="column start-column">
            <h3>Start</h3>
            <ul className="action-list">
              <li onClick={() => handleAction('New File')}>
                <VscNewFile className="icon" /> <span>New File...</span>
              </li>
              <li onClick={() => handleAction('Open File')}>
                <VscFolderOpened className="icon" /> <span>Open File...</span>
              </li>
              <li onClick={() => handleAction('Open Folder')}>
                 <VscFolderOpened className="icon" /> <span>Open Folder...</span>
              </li>
              <li onClick={() => handleAction('Clone Git Repository')}>
                 <VscRepoClone className="icon" /> <span>Clone Git Repository...</span>
              </li>
              <li onClick={() => handleAction('Connect to...')}>
                 <VscRemote className="icon" /> <span>Connect to...</span>
              </li>
            </ul>

            <div className="recent-section">
               <h3>Recent</h3>
               <p className="no-recent">You have no recent folders, <a href="#" onClick={(e) => { e.preventDefault(); handleAction('Open Folder'); }}>open a folder</a> to start.</p>
            </div>
          </div>

          <div className="column walkthrough-column">
             <h3>Walkthroughs</h3>
             <div className="walkthrough-list">
                <WalkthroughItem
                   title="Get Started with VS Code"
                   desc="Customize your editor, learn the basics, and start coding"
                   isNew={true}
                />
                <WalkthroughItem
                   title="Learn the Fundamentals"
                   desc=""
                />
                <WalkthroughItem
                   title="GitHub Copilot"
                   badge="Updated"
                />
                <WalkthroughItem
                   title="Get Started with Python Development"
                   badge="Updated"
                />
                <WalkthroughItem
                   title="Get Started with Jupyter Notebooks"
                   badge="Updated"
                />
                <a href="#" className="more-link" onClick={(e) => { e.preventDefault(); handleAction('More Walkthroughs'); }}>More...</a>
             </div>
          </div>
        </div>

        <div className="footer-checkbox">
           <input type="checkbox" id="show-welcome" defaultChecked />
           <label htmlFor="show-welcome">Show welcome page on startup</label>
        </div>
      </div>
    </div>
  );
};

const WalkthroughItem = ({ title, desc, isNew, badge }) => (
  <div className="walkthrough-card">
    <div className="walkthrough-icon">
       {isNew && <span className="star-icon">★</span>}
    </div>
    <div className="walkthrough-details">
      <div className="walkthrough-title">
        {title} {badge && <span className="badge">{badge}</span>}
      </div>
      {desc && <div className="walkthrough-desc">{desc}</div>}
    </div>
  </div>
);

export default WelcomePage;
