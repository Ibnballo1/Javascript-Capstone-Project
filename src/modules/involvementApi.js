const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'QKa6LFszuxzqdWDMHQTc';

const addComment = async (mealId, username, comment) => {
  await fetch(`${involvementApi}/apps/${appID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${mealId}`,
      username: `${username}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComment = async (mealId) => {
  const getData = await fetch(`${involvementApi}/apps/${appID}/comments?item_id=${mealId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let results = '';
  if (getData.status !== 400) {
    results = await getData.json();
  }
  return results;
};

export { addComment, getComment };