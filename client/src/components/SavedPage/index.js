import React, { Component } from 'react';
import API from '../../utils/API';
import { List, ListItem } from '../List';

class SavedPage extends Component {
  // instantiate state for saved books
  state = {
    savedBooks: [],
  };

  // loads saved books when Saved page loads
  componentDidMount() {
    this.loadBooks();
  }

  // loads books from database
  loadBooks = (e) => {
    API.getBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data }, function () {
          console.log(this.state.savedBooks);
        });
      })
      .catch((err) => console.log(err));
  };
  //

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12'>
            <div className='jumbotron'>
              {this.state.savedBooks.length ? (
                <List>
                  {this.state.savedBooks.map((book) => {
                    return (
                      <ListItem
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        link={book.link}
                        description={book.description}
                        image={book.image}
                        id={book._id}
                        loadBooks={this.loadBooks}
                      />
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedPage;
