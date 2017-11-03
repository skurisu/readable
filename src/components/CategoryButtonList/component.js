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
    const { categories } = this.props;
    return (
      <div>
        {categories.map(category => (
          <Button
            color="teal"
            key={category.name}
            onClick={() => this.props.selectCategory(category.name)}
          >
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
