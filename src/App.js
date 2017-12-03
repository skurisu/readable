import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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
        <Route exact path="/" component={MainPageWrapper} />
        <Route exact path="/error" component={PageNotFound} />
        <Route exact path="/add/post" component={AddPostForm} />
        <Route exact path="/:category" component={MainPageWrapper} />
        <Route
          exact
          path="/:category/:post_id"
          component={SinglePostPageWrapper}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
