const viewComments = (postedComments) => {
  const data = postedComments;
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = '';
  if (Array.isArray(data)) {
    data.forEach((comment) => {
      const element = document.createElement('li');
      element.innerHTML = `
      ${comment.creation_date} ${comment.username} : ${comment.comment}
      `;
      commentList.append(element);
    });
  }
};

export default viewComments;