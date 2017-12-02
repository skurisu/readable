export function updateComment(updatedComment, id, forceUpdate, toggleEditForm) {
  return () => {
    const URL = `/comments/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedComment)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        forceUpdate();
        toggleEditForm(false);
      });
  };
}
