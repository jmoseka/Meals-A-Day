import postComment from './postComment.js';

const validateCommentSubmission = (id) => {
  const nameInput = document.querySelector('.name-input');
  const textAreaInput = document.querySelector('.text-area');
  const notice = document.querySelector('.notice');

  const name = nameInput.value;
  const text = textAreaInput.value;
  if (!name || !text) {
    notice.classList.remove('hidden');
  } else {
    postComment(id, name, text);
    nameInput.value = '';
    textAreaInput.value = '';
  }
};

export default validateCommentSubmission;