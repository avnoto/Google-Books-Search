import React from 'react';
import API from '../../utils/API';
import Button from '@material-ui/core/Button';

export function List({ children }) {
  return <ul className='list-group'>{children}</ul>;
}

// component to render each book
export function ListItem(props) {
  // function to handle saving book to db when save button is clicked
  const handleSaveBtn = (e) => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert(
      'Saved ' +
        props.title +
        '. Click on the Saved tab to view your book list.'
    );
  };

  const handleDeleteBtn = (e) => {
    API.deleteBook(props.id)
      .then((res) => {
        // use loadBooks prop from Saved page component
        props.loadBooks();
        console.log(props.id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <li className='list-group-item' key={props.id}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-4 col-sm-2'>
            <img className='img-thumbnail' alt='book cover' src={props.image} />
          </div>
          <div className='col-xs-8 col-sm-10'>
            <h3>{props.title}</h3>
            <p>Written By {[props.authors].flat().join(', ')}</p>
            <p>{props.description}</p>

            <Button
              rel='noreferrer noopener'
              target='_blank'
              href={props.link}
              variant='outlined'
              color='primary'
            >
              View
            </Button>
            {!props.id ? (
              <Button
                variant='outlined'
                color='primary'
                onClick={handleSaveBtn}
              >
                Save
              </Button>
            ) : (
              <Button
                variant='outlined'
                color='secondary'
                onClick={handleDeleteBtn}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
