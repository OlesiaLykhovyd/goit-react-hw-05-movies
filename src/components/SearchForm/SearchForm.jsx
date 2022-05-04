import { useState } from 'react';
import Notiflix from 'notiflix';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Form, Button, Input } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  let [, setSearchParams] = useSearchParams({});
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }
    // onSubmit(searchInput);

    setSearchParams({ query: `${searchInput}` });
    // console.log(searchParams.get('query'));

    setSearchInput('');
  };

  const handleChange = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={searchInput}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
}
