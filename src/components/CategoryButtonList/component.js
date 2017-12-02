import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CategoryButtonList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map(category => (
          <Link to={`/${category.name}`} key={category.name}>
            <Button color="teal">{category.name}</Button>
          </Link>
        ))}
      </div>
    );
  }
}

CategoryButtonList.PropTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func
};
