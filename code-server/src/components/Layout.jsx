import React from 'react';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import WelcomePage from '../pages/WelcomePage';
import '../styles/global.css';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <TitleBar />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <ActivityBar />
        <div style={{ flex: 1, backgroundColor: 'var(--vscode-bg)', overflow: 'auto' }}>
          <WelcomePage />
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Layout;
