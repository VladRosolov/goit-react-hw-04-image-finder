import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

export default function Modal({ picture, onClose }) {
  const modalRoot = document.querySelector('#modal-root');
  const { largeImageURL, tags } = picture;
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('esc');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

// Modal.propTypes = {
//   picture: PropTypes.objectOf(
//     PropTypes.shape({
//       largeImageUrl: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func,
// };
