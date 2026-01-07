import React from 'react';
import './Sidebar.css';
import { VscChevronRight, VscChevronDown, VscNewFile, VscNewFolder, VscRefresh, VscCollapseAll } from 'react-icons/vsc';
import { VscFileCode, VscFile } from 'react-icons/vsc';

const Sidebar = ({ files, onOpenFile }) => {
  // Convert files object to array for rendering
  const fileList = Object.values(files).filter(f => f.type !== 'welcome');
  console.log('Sidebar rendering with files:', fileList);

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <span>EXPLORER</span>
        <div className="sidebar-actions">
           <VscNewFile title="New File" />
           <VscNewFolder title="New Folder" />
           <VscRefresh title="Refresh" />
           <VscCollapseAll title="Collapse All" />
        </div>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section">
           <div className="section-header">
              <VscChevronDown />
              <span style={{fontWeight: 'bold'}}>MY-WEB-APP</span>
           </div>
           <div className="file-tree">
              {fileList.length === 0 && <div className="empty-tree">No files</div>}
              {fileList.map(file => (
                <div key={file.id} className="tree-item" onClick={() => onOpenFile(file.id)}>
                   <span className="file-icon"><VscFileCode /></span>
                   <span className="file-name">{file.title}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
