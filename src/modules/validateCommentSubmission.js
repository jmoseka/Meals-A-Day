import postComment, { getComments } from './postComment.js';
import viewComments from './viewComments.js';

const validateCommentSubmission = async (id) => {
  const nameInput = document.querySelector('.name-input');
  const textAreaInput = document.querySelector('.text-area');
  const notice = document.querySelector('.notice');

  const name = nameInput.value;
  const text = textAreaInput.value;
  if (!name || !text) {
    notice.classList.remove('hidden');
  } else {
    await postComment(id, name, text);
    nameInput.value = '';
    textAreaInput.value = '';
    const comments = await getComments(id);
    viewComments(comments);
  }
};

export default validateCommentSubmission;