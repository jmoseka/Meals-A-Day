/* eslint-disable no-await-in-loop */
import postLikes from './postLikes.js';
import getLikes from './getLikes.js';

const mealsList = document.getElementById('meals-list');

const likesCount = (target, likesArray, numOfLikes) => {
  console.log(target)
  likesArray.forEach((obj) => {
    if (obj.item_id === target.id) {
      numOfLikes.innerHTML = `${obj.likes} likes `;
    }
  });
};

const mealView = async (data) => {
  for (let i = 0; i <= data.length - 1; i += 1) {
    const mealDiv = document.createElement('div');
    mealDiv.id = data[i].idMeal;
    mealDiv.classList.add('meal-div');
    mealDiv.setAttribute('meal-id', `${data[i].idMeal}`);

    const mealImage = document.createElement('div');
    mealImage.classList.add('meal-img-div');

    const image = document.createElement('img');
    image.classList.add('meal-img');
    image.src = data[i].strMealThumb;
    mealImage.appendChild(image);
    mealDiv.appendChild(mealImage);

    const mealDescription = document.createElement('div');
    mealDescription.classList.add('meals-description');
    const mealName = document.createElement('h3');
    mealName.innerHTML = data[i].strMeal;

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('material-icons');
    likeBtn.innerText = 'favorite_border';
    likeBtn.id = data[i].idMeal;

    mealDescription.appendChild(mealName);
    mealDescription.appendChild(likeBtn);
    mealDiv.appendChild(mealDescription);

    const mealLikes = document.createElement('div');
    const numOfLikes = document.createElement('small');
    mealLikes.classList.add('meal-likes');
    mealLikes.setAttribute('id', 'meal-likes');
    numOfLikes.innerHTML = '0 likes';
    mealLikes.appendChild(numOfLikes);
    mealDiv.appendChild(mealLikes);

    const commentContainer = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('comment-btn');
    button.setAttribute('id', `${data[i].idMeal}`);
    button.innerHTML = 'Comments';

    commentContainer.appendChild(button);
    mealDiv.appendChild(commentContainer);

    mealsList.appendChild(mealDiv);

    const likesArray = await getLikes();
    likesCount(likeBtn, likesArray, numOfLikes);

    likeBtn.addEventListener('click', async (e) => {
      await postLikes(likeBtn.id);
      const newLikes = await getLikes();
      likesCount(e.target, newLikes, numOfLikes);
    });
  }
};

export default mealView;
