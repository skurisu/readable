export function deletePost(item, id, setRefresh) {
  return () => {
    const URL = `/posts/${id}`;
    return fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        setRefresh(true);
      });
  };
}
