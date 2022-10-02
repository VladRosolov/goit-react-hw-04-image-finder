import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  onClick,
  object,
}) => {
  return (
    <li
      key={id}
      className={css.imageGalleryItem}
      onClick={() => onClick(object)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItem__image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
