// DataSciModal.js

import React from 'react';
import './DataSciModal.css'; // Import the CSS file

function DataSciModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content goes here */}
        <p>This is the Data Science modal content!</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}

export default DataSciModal;
