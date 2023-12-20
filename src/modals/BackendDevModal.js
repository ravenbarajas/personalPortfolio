// FrontendDevModal.js

import React from 'react';
import './FrontendDevModal.css'; // Import the CSS file

function BackendDevModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content goes here */}
        <p>This is the Backend Development modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default BackendDevModal;
