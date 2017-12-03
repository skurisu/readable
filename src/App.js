import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import MainPageWrapper from './components/MainPageWrapper/index';
import AddPostForm from './components/AddPostForm/index';
import SinglePostPageWrapper from './components/SinglePostPageWrapper';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = () => {
  return (
    <div>
      <Link to="/">
        <Button style={{ marginLeft: 14, marginTop: 14 }}>
          <Icon name="home" />Home
        </Button>
      </Link>
      <Switch>
        <Route exact path="/add/post" render={() => <AddPostForm />} />
        <Route exact path="/error" render={() => <PageNotFound />} />
        <Route exact path="/" render={() => <MainPageWrapper />} />
        <Route exact path="/:category" render={() => <MainPageWrapper />} />
        <Route
          exact
          path="/:category/:post_id"
          render={() => <SinglePostPageWrapper />}
        />
      </Switch>
    </div>
  );
};

export default App;
