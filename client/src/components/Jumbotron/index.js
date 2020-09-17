import React from 'react';
import './style.css';

function Jumbotron() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-12 col-sm-12'>
          <div
            style={{
              marginTop: '20px',
              paddingTop: 100,
              textAlign: 'center',
            }}
            className='jumbotron'
          >
            <h1>Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
