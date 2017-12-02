export function voteComment(voteOption, id, forceUpdate) {
  return () => {
    const URL = `/comments/${id}`;
    return fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: 'toni',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(voteOption)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        forceUpdate();
      });
  };
}

export function deleteComment(item, id, forceUpdate) {
  return () => {
    const URL = `/comments/${id}`;
    fetch(URL, {
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
        forceUpdate();
      });
  };
}
