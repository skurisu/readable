import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPageWrapper from './components/MainPageWrapper/index';
import AddPostForm from './components/AddPostForm/index';
import SinglePostPageWrapper from './components/SinglePostPageWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <MainPageWrapper />} />
        <Route exact path="/:category" render={() => <MainPageWrapper />} />
        <Route exact path="/add/post" render={() => <AddPostForm />} />
        <Route
          exact
          path="/single-post"
          render={() => <SinglePostPageWrapper />}
        />
      </div>
    );
  }
}

export default App;
