const openCloseModal = () => {
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal-close');
  const overlay = document.querySelector('.overlay');

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

export default openCloseModal;