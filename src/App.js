import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentForm from './components/CommentForm/index';
import MainPageWrapper from './components/MainPageWrapper/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <MainPageWrapper />} />
        <Route exact path="/comments" render={() => <CommentForm />} />
      </div>
    );
  }
}

export default App;
