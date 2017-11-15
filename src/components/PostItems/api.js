export default function() {
  return fetch('/posts', {
    headers: { Authorization: 'toni' }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.sort((a, b) => b.voteScore - a.voteScore);
    });
}

export function comment(postId) {
  const id = postId;
  const URL = `/posts/${id}/comments`;

  return fetch(URL, {
    headers: { Authorization: 'toni' }
  }).then(response => {
    return response.json();
  });
}
