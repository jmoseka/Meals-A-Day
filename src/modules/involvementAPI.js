const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CsCw6FWwTQvIQF9pw3a6/comments';
// post the comments to api
const postComment = async (id, name, text) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  });
  return response;
};

const getComments = async (id) => {
  const data = await fetch(`${baseUrl}?item_id=${id}`);
  const result = data.json();
  return result;
};

const commentCounter = async (id) => {
  const data = await getComments(id);
  return data.length;
};

export { postComment, getComments, commentCounter };