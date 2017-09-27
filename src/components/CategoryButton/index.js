import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class CategoryButton extends Component {
  render() {
    return (
      <div>
        <Button color="teal">React</Button>
        <Button color="teal">Redux</Button>
        <Button color="teal">Udacity</Button>
      </div>
    );
  }
}

export default CategoryButton;
