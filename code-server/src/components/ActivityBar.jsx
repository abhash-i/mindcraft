import React from 'react';
import './ActivityBar.css';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';

const ActivityBar = () => {
  return (
    <div className="activity-bar">
      <div className="top-icons">
        <div className="icon active"><VscFiles size={24} /></div>
        <div className="icon"><VscSearch size={24} /></div>
        <div className="icon"><VscSourceControl size={24} /></div>
        <div className="icon"><VscDebugAlt size={24} /></div>
        <div className="icon"><VscExtensions size={24} /></div>
      </div>
      <div className="bottom-icons">
        <div className="icon"><VscAccount size={24} /></div>
        <div className="icon"><VscSettingsGear size={24} /></div>
      </div>
    </div>
  );
};

export default ActivityBar;
