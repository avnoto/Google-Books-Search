import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Jumbotron />
      <Main />
    </div>
  );
}

export default App;
