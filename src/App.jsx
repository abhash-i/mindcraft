import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import Editor from './Editor';
import './App.css';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscMenu } from 'react-icons/vsc';

function App() {
  const [activeActivity, setActiveActivity] = useState('files');
  const [tabs, setTabs] = useState([{ id: 'welcome', title: 'Welcome', type: 'welcome' }]);
  const [activeTabId, setActiveTabId] = useState('welcome');
  const [files, setFiles] = useState({}); // Simple file content store: { 'untitled-1': 'content...' }

  const handleNewFile = () => {
    const newFileId = `Untitled-${Object.keys(files).length + 1}`;
    setFiles({ ...files, [newFileId]: '' });
    const newTab = { id: newFileId, title: newFileId, type: 'editor' };
    setTabs([...tabs, newTab]);
    setActiveTabId(newFileId);
  };

  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);
    if (activeTabId === tabId && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    } else if (newTabs.length === 0) {
      setActiveTabId(null);
    }
  };

  const updateFileContent = (fileId, content) => {
    setFiles({ ...files, [fileId]: content });
  };

  const activeTab = tabs.find(t => t.id === activeTabId);

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
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`tab ${activeTabId === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.type === 'welcome' && <img src="/vite.svg" width="14" style={{marginRight: 6}} />}
                <span>{tab.title}</span>
                <span className="close-tab" onClick={(e) => handleCloseTab(e, tab.id)}>×</span>
              </div>
            ))}
          </div>
          <div className="editor-content">
             {activeTab && activeTab.type === 'welcome' && (
               <WelcomePage onNewFile={handleNewFile} />
             )}
             {activeTab && activeTab.type === 'editor' && (
               <Editor
                 content={files[activeTab.id] || ''}
                 onChange={(val) => updateFileContent(activeTab.id, val)}
               />
             )}
             {!activeTab && <div className="empty-editor">No Open Files</div>}
          </div>

          {/* Status Bar */}
          <div className="status-bar">
             <div className="status-left">
                <span className="status-item"><VscSourceControl /> main</span>
                <span className="status-item">0 ⚠ 0</span>
             </div>
             <div className="status-right">
                <span className="status-item">Ln {activeTab && activeTab.type === 'editor' ? (files[activeTab.id]?.split('\n').length || 1) : 1}, Col 1</span>
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
