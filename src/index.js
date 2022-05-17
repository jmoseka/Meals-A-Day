import './style.css';
import Logo from '../img/logo.png';
import getMeals from './modules/getMeals.js';
import mealView from './modules/mealsView.js';

const logo = document.getElementById('logo');
logo.src = Logo;

window.addEventListener('load', async () => {
  const meals = await getMeals();
  mealView(meals);
});
