import validateCommentSubmission from './validateCommentSubmission.js';
import { getComments } from './involvementAPI.js';
import viewComments from './viewComments.js';

const getPopUpInfo = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const reply = await response.json();

  /** MealDB object generation */
  const mealDB = reply.meals[0];
  const keys = Object.keys(mealDB);

  /** Variables of all the required values */
  const { strMeal, strMealThumb, strInstructions } = mealDB;
  const arrIngredients = [];
  const strIngredient = 'strIngredient';

  keys.forEach((key) => {
    if (key.includes(strIngredient)) {
      if (mealDB[key] !== null && mealDB[key].length > 0) {
        arrIngredients.push(mealDB[key]);
      }
    }
  });

  /** populate comment data */
  const itemTitle = document.querySelector('.item-title');
  const instructionText = document.querySelector('.instruction-text');
  const imgThumb = document.querySelector('.img-thumb');
  const ingredientList = document.querySelector('.ingredient-list');
  const formContainer = document.querySelector('.form-container');

  itemTitle.innerHTML = (strMeal);
  instructionText.innerHTML = strInstructions;
  imgThumb.innerHTML = `
    <div class="thumbnail-container">
    <img src="${strMealThumb}">
    <div>
    `;
  /** List of ingredients */
  ingredientList.innerHTML = '';
  arrIngredients.forEach((ingredient) => {
    const element = document.createElement('li');
    element.innerHTML = `
                <img src="https://www.themealdb.com/images/ingredients/${ingredient}.png">
                <p>${ingredient}</p>
                `;

    ingredientList.appendChild(element);
  });

  /** form */
  formContainer.innerHTML = `
  <p class=form-header-text>Add a Comment</p>
  <form>
          <input class="name-input" type="text" placeholder="Your name">
          <textarea class="text-area" cols="30" rows="10" placeholder="Your insights"></textarea>
          <button class="form-submit" id=${id} type="button">Comment</button>
          <p class="notice hidden">⛔ Fields cannot be empty</p>
      </form>
  `;
  const formSubmit = document.querySelector('.form-submit');
  formSubmit.addEventListener('click', () => {
    validateCommentSubmission(formSubmit.id);
  });

  /** view comments */
  const commentPosted = await getComments(formSubmit.id);
  viewComments(commentPosted);
};

export default getPopUpInfo;