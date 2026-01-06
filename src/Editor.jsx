import React from 'react';
import './Editor.css';

const Editor = ({ content, onChange }) => {
  return (
    <div className="editor-container">
      <div className="line-numbers">
        {content.split('\n').map((_, i) => (
          <div key={i} className="line-number">{i + 1}</div>
        ))}
        {/* Always show at least one extra line number for new input */}
        <div className="line-number">{content.split('\n').length + 1}</div>
      </div>
      <textarea
        className="code-input"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        spellCheck="false"
        autoFocus
      />
    </div>
  );
};

export default Editor;
