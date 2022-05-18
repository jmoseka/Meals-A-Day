const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BsCw6FWwTQvIQF9pw3a6/comments';
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

export default postComment;