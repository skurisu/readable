import { push } from 'react-router-redux';

export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_POST = 'SET_POST';
export const SET_COMMENTLENGTH = 'SET_COMMENTLENGTH';

export function setPost(data) {
  return { type: SET_POST, data };
}

export function setComments(data) {
  return { type: SET_COMMENTS, data };
}

export function setCommentLength(data) {
  return { type: SET_COMMENTLENGTH, data };
}

export function createComment(commentDetails, forceUpdateComponent) {
  return () => {
    return fetch('/comments', {
      method: 'POST',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentDetails)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        forceUpdateComponent();
      });
  };
}

export function getSinglePost(id) {
  return dispatch => {
    const POSTS_URL = `/posts/${id}`;

    return fetch(POSTS_URL, {
      headers: { Authorization: 'toni' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.id) {
          dispatch(setPost(data));
        } else {
          dispatch(push('/'));
        }
      });
  };
}

export function getPostComments(id) {
  return dispatch => {
    const URL = `/posts/${id}/comments`;
    fetch(URL, {
      headers: { Authorization: 'toni' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const commentLength = data.length;
        dispatch(setCommentLength(commentLength));
        dispatch(setComments(data));
        data.sort((a, b) => b.voteScore - a.voteScore);
      });
  };
}
