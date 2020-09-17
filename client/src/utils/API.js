import axios from 'axios';
// endpoint from googlebooks api
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
  // calls googlbooks api and retrieve books based on user input
  searchBooks: (query) => axios.get(baseUrl + query),
  // get all books saved in db
  getBooks: () => axios.get('/api/books').then((result) => result.data),
  // saves a book to the db
  saveBook: (bookData) =>
    axios
      .post('/api/books', bookData)
      .then((result) => result.data)
      .catch((err) => console.log(err)),
  // deletes a book with the given id
  deleteBook: (id) =>
    axios.delete('api/books/' + id).then((result) => result.data),
};
