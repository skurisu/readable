import React, { Component } from 'react';
import { Grid, Header, Button, Comment, Icon } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h1">Categories</Header>
              <Button color="teal">React</Button>
              <Button color="teal">Redux</Button>
              <Button color="teal">Udacity</Button>
              <div style={{ marginTop: 30 }}>
                <Button color="green">
                  Add Comment{' '}
                  <Icon name="comment" style={{ opacity: 1, marginLeft: 5 }} />
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <div style={{ float: 'right' }}>
                <span>
                  <strong>Sort By: </strong>
                </span>
                <Button
                  color="yellow"
                  content="Upvotes"
                  icon="thumbs outline up"
                  labelPosition="left"
                />
                <Button
                  color="yellow"
                  content="Time ago"
                  icon="time"
                  labelPosition="left"
                />
              </div>

              <Comment.Group>
                <Header as="h1" dividing>
                  Comments
                </Header>
                <Comment>
                  <Comment.Content>
                    <Comment.Author as="a">Matt</Comment.Author>
                    <Comment.Metadata>
                      <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                      <div>
                        <Icon link color="green" name="arrow up" />
                        <span>
                          <strong>1234</strong>
                        </span>
                        <Icon
                          link
                          color="red"
                          name="arrow down"
                          style={{ marginLeft: 3.5 }}
                        />
                        <Icon link name="edit" />
                        <Icon link color="red" name="delete" />
                      </div>
                    </Comment.Actions>
                  </Comment.Content>
                  <Comment>
                    <Comment.Content>
                      <Comment.Author as="a">Joe Henderson</Comment.Author>
                      <Comment.Metadata>
                        <div>5 days ago</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        Dude, this is awesome. Thanks so much
                      </Comment.Text>
                      <Comment.Actions>
                        <div>
                          <Icon link color="green" name="arrow up" />
                          <span>
                            <strong>1234</strong>
                          </span>
                          <Icon link color="red" name="arrow down" />
                          <Icon link name="edit" />
                          <Icon link color="red" name="delete" />
                        </div>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment>
              </Comment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
