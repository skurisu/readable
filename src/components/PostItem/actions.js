export const GET_ALLPOSTS = 'GET_ALLPOSTS';

export function getPosts(data) {
  return { type: GET_ALLPOSTS, data };
}
