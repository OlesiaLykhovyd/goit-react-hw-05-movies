import { useState } from 'react';
import Notiflix from 'notiflix';

export default function SearchForm({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }
    onSubmit(searchInput);
    setSearchInput('');
  };
  const handleChange = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchInput}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
