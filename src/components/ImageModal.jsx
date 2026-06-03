import React from 'react';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <img
        src={src}
        alt="Architektur Grossansicht"
        onClick={(e) => e.stopPropagation()}
        className="modal-image"
      />
    </div>
  );
};

export default ImageModal;
