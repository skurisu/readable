export const SET_CATEGORIES = 'SET_CATEGORIES';

export function setCategories(data) {
  return { type: SET_CATEGORIES, data };
}

export function getCategories() {
  return dispatch => {
    return fetch('/categories', {
      headers: { Authorization: 'toni' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const categories = data.categories;
        dispatch(setCategories(categories));
      });
  };
}
