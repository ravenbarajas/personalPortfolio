// DesktopDevModal.js

import React from 'react';
import './DesktopDevModal.css'; // Import the CSS file

function DesktopDevModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content goes here */}
        <p>This is the Desktop Development modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default DesktopDevModal;
