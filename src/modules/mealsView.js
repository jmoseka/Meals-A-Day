const mealsList = document.getElementById('meals-list');

const mealView = async (data) => {
  for (let i = 0; i <= data.length - 1; i += 1) {
    const mealDiv = document.createElement('div');
    mealDiv.id = data[i].idMeal;
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
    likeBtn.innerHTML = '<i class="material-icons">favorite_border</i>';
    likeBtn.id = data[i].idMeal;

    mealDescription.appendChild(mealName);
    mealDescription.appendChild(likeBtn);
    mealDiv.appendChild(mealDescription);

    const commentContainer = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('comment-btn');
    button.setAttribute('id', `${data[i].idMeal}`);
    button.innerHTML = 'Comments';

    commentContainer.appendChild(button);
    mealDiv.appendChild(commentContainer);

    mealsList.appendChild(mealDiv);
  }
};

export default mealView;
