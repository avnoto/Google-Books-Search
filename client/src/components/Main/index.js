import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from '../SearchPage';
import SavedPage from '../SavedPage';

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={SearchPage}></Route>
      <Route exact path='/search' component={SearchPage}></Route>
      <Route exact path='/saved' component={SavedPage}></Route>
    </Switch>
  );
};

export default Main;
