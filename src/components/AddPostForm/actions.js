import { push } from 'react-router-redux';

export const REDIRECT_HOME = 'REDIRECT_HOME';

export function createPost(postDetails) {
  return dispatch => {
    return fetch('/posts', {
      method: 'POST',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postDetails)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        dispatch(push('/'));
      });
  };
}
