import React from 'react';
import './StatusBar.css';
import { VscSourceControl, VscError, VscWarning, VscBell, VscFeedback } from 'react-icons/vsc';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="left-items">
        <div className="status-item remote-icon"><VscSourceControl /></div>
        <div className="status-item">main*</div>
        <div className="status-item"><VscError /> 0 <VscWarning /> 0</div>
      </div>
      <div className="right-items">
        <div className="status-item">Ln 1, Col 1</div>
        <div className="status-item">UTF-8</div>
        <div className="status-item">CRLF</div>
        <div className="status-item">JavaScript</div>
        <div className="status-item"><VscFeedback /></div>
        <div className="status-item"><VscBell /></div>
      </div>
    </div>
  );
};

export default StatusBar;
