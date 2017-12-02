import api, { comment } from './api';

export const SET_ALLPOSTS = 'SET_ALLPOSTS';
export const SET_SELECTEDPOSTS = 'SET_SELECTEDPOSTS';
export const SET_REFRESHPOSTS = 'SET_REFRESHPOSTS';

export function setPosts(data) {
  return { type: SET_ALLPOSTS, data };
}

export function setSelectedPosts(data, setPosts) {
  return { type: SET_SELECTEDPOSTS, data };
}

export function setRefreshPosts(data) {
  return { type: SET_REFRESHPOSTS, data };
}

export function getData(categoryParam) {
  return dispatch => {
    api().then(data => {
      dispatch(setRefreshPosts(false));

      const commentPromises = data.map(post => {
        const id = post.id;
        return comment(id);
      });
      Promise.all(commentPromises).then(commentsArray => {
        data.map((post, index) => {
          post.commentsLength = commentsArray[index].length;
          return post;
        });

        dispatch(setPosts(data));
        const selectedPosts = data.filter(
          post => post.category === categoryParam
        );

        if (categoryParam) {
          dispatch(setSelectedPosts(selectedPosts));
        } else {
          dispatch(setSelectedPosts(data));
        }
      });
    });
  };
}
