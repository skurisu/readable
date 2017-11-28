export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_POST = 'SET_POST';

export function setPost(data) {
  return { type: SET_POST, data };
}

export function setComments(data) {
  return { type: SET_COMMENTS, data };
}
