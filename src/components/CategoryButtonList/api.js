export default function() {
  return fetch('/categories', {
    headers: { Authorization: 'toni' }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const categories = data.categories;
      // QUESTION: sort data here or in component.js?
      categories.sort((a, b) => a.voteScore - b.voteScore);
      return categories;
    });
}
