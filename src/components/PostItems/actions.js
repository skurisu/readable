export const SET_ALLPOSTS = 'SET_ALLPOSTS';
export const SET_SELECTEDPOSTS = 'SET_SELECTEDPOSTS';
export const SET_POST = ' SET_POST';

export function setPosts(data) {
  return { type: SET_ALLPOSTS, data };
}

export function setSelectedPosts(data) {
  return { type: SET_SELECTEDPOSTS, data };
}

export function setPost(data) {
  return { type: SET_POST, data };
}
