export const SET_ALLPOSTS = 'SET_ALLPOSTS';
export const SET_SELECTEDPOSTS = 'SET_SELECTEDPOSTS';
export const SET_REFRESHPOSTS = 'SET_REFRESHPOSTS';

export function setPosts(data) {
  return { type: SET_ALLPOSTS, data };
}

export function setSelectedPosts(data) {
  return { type: SET_SELECTEDPOSTS, data };
}

export function setRefreshPosts(data) {
  return { type: SET_REFRESHPOSTS, data };
}
