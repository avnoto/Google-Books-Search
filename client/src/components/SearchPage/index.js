import React, { useEffect, useState } from 'react';
import Jumbotron from '../Jumbotron';
import API from '../../utils/API';

function SearchPage() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return <Jumbotron />;
}

export default SearchPage;
