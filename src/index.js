import './style.css';
import Logo from '../img/logo.png';
import getMeals from './modules/getMeals';
import mealView from './modules/mealsView';

const logo = document.getElementById('logo');
logo.src = Logo;

window.addEventListener('load', async () => {
  const meals = await getMeals();
  mealView(meals);
});
