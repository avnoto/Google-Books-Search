import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12 col-sm-12'>
          <div className='jumbotron'>
            <h3>What Books Should I Read?</h3>

            <FormControl style={{ display: 'flex' }}>
              <TextField
                style={{ marginTop: '10px' }}
                className='outlined-basic'
                label='Title (required)'
                name='title'
                variant='outlined'
                onChange={() => {}}
              />
              <TextField
                style={{ marginTop: '10px' }}
                className='outlined-basic'
                label='Author (required)'
                name='author'
                variant='outlined'
                onChange={() => {}}
              />
            </FormControl>
            <Button
              style={{ marginTop: '10px' }}
              variant='outlined'
              color='primary'
              disabled={!(formObject.author && formObject.title)}
              onClick={() => {}}
            >
              Submit Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
