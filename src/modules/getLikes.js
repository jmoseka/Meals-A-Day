const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CsCw6FWwTQvIQF9pw3a6/likes',
  );
  return response.json();
};

export default getLikes;
