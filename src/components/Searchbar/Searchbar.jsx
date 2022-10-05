import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return alert('Please enter a request!');
    }
    onSubmit(value);
  };

  const handleValueChange = event => {
    setValue(event.target.value.toLowerCase());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm__button}>
          <FcSearch size="32px" />
        </button>

        <input
          className={css.searchForm__input}
          type="text"
          placeholder="Search images and photos"
          value={value}
          onChange={handleValueChange}
        />
      </form>
    </header>
  );
}
