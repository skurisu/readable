import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import api from './api';
import PropTypes from 'prop-types';

export default class CategoryButtonList extends Component {
  componentWillMount() {
    api().then(data => {
      this.props.setCategories(data);
    });
  }

  render() {
    const categories = this.props.categories;
    console.log(categories);
    return (
      <div>
        {categories.map(category => (
          <Button color="teal" key={category.name}>
            {category.name}
          </Button>
        ))}
      </div>
    );
  }
}

CategoryButtonList.PropTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func
};

// <CategoryButtonList categories={[]} setCategories={(x) => {}} /> // unconnect (to redux) component
