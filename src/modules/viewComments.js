import commentCounter from "./commentCounter";

const viewComments = (postedComments) => {
  const data = postedComments;
  console.log(data)
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

  const commentTotal = document.querySelector('.comment-total');
  commentTotal.textContent = `(${commentCounter(data)})`;  
};

export default viewComments;