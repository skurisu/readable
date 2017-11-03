export default function() {
  return fetch('/categories', {
    headers: { Authorization: 'toni' }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const categories = data.categories;
      return categories;
    });
}
