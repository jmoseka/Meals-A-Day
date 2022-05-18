import mealsCounter from '../modules/mealsCounter.js';

describe('Returns number of items on the homepage', () => {
  it('returns 0 if the meals array is empty', () => {
    const mealsArray = [];
    expect(mealsCounter(mealsArray)).toBe(0);
  });

  it('returns the number of meals in the mealsArray ', () => {
    const mealsArray = [
      {
        strMeal: 'Chocolate Gateau',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
        idMeal: '52776',
      },
      {
        strMeal: 'Chicken Tandoori',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
        idMeal: '52795',
      },
    ];
    expect(mealsCounter(mealsArray)).toBe(2);
  });
});