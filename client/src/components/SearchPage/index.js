import React, { Component } from 'react';
import API from '../../utils/API';
import { List, ListItem } from '../List';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class SearchPage extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    bookSearch: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    API.searchBooks(this.state.bookSearch)
      .then((res) => {
        this.setState({ books: res.data.items }, function () {
          console.log(this.state.books);
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
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
                  label='Title'
                  name='bookSearch'
                  variant='outlined'
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange}
                />
                {/* <TextField
                  style={{ marginTop: '10px' }}
                  className='outlined-basic'
                  label='Author (required)'
                  name='author'
                  variant='outlined'
                  onChange={() => {}}
                /> */}
              </FormControl>
              <Button
                style={{ marginTop: '10px' }}
                variant='outlined'
                color='primary'
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </Button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12'>
            <div className='jumbotron'>
              <List>
                {this.state.books.map((book) => {
                  return (
                    <ListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      link={book.volumeInfo.infoLink}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                    />
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
