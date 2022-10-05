import React, { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import { ApiService } from '../services/ApiService';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [per_page, setPer_page] = useState(12);
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!value) {
      return;
    }
    ApiService(value, per_page)
      .then(result => {
        setPictures(result.hits);
        setLoading(true);
      })
      .catch(error => {
        setError(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [per_page, value]);

  const handleFormSubmit = value => {
    console.log(value);
    setValue(value);
    setPer_page(12);
  };

  const loadMore = () => {
    setPer_page(per_page + 12);
  };

  const openModal = picture => {
    setShowModal(true);
    setPicture(picture);
  };

  const closeModal = () => {
    setShowModal(false);
    setLoading(false);
  };

  const isPictures = Boolean(pictures.length);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      {showModal && <Modal picture={picture} onClose={closeModal} />}

      {error && <p>ОЙ, что-то пошло не так..</p>}
      <Searchbar onSubmit={handleFormSubmit} />
      {isPictures && <ImageGallery pictures={pictures} onClick={openModal} />}
      {isPictures && <Button onClick={loadMore} />}
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      )}
    </div>
  );
}
