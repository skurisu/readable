export function updatePost(updatedPost, id, setRefreshPosts, toggleEditForm) {
  return () => {
    const URL = `/posts/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        setRefreshPosts(true);
        toggleEditForm(false);
      });
  };
}
