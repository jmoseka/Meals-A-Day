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
    ingredientList.classList = 'ingredient-list';
  
    itemTitle.innerHTML = (strMeal);
    instructionText.innerHTML = strInstructions;
  
    imgThumb.innerHTML = `
    <div class="thumbnail-container">
    <img src="${strMealThumb}">
    <div>
    `;
  
    arrIngredients.forEach((ingredient) => {
      const element = document.createElement('li');
      element.innerHTML = `
                <img src="https://www.themealdb.com/images/ingredients/${ingredient}.png">
                <p>${ingredient}</p>
                `;
  
      ingredientList.appendChild(element);
    });
  };
  
  export default getPopUpInfo;