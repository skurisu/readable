export default function() {
  return fetch('/posts', {
    headers: { Authorization: 'toni' }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
