// FrontendDevModal.js

import React from 'react';
import './FrontendDevModal.css'; // Import the CSS file

function FrontendDevModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="frontendDev-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content goes here */}
        <p>This is the Frontend Development modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default FrontendDevModal;
