// MobileDevModal.js

import React from 'react';
import './MobileDevModal.css'; // Import the CSS file

function MobileDevModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content goes here */}
        <p>This is the Mobile Development modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default MobileDevModal;
