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

export function vote(voteOption, id, setRefresh) {
  return () => {
    const URL = `/posts/${id}`;
    fetch(URL, {
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
        setRefresh(true);
      });
  };
}
