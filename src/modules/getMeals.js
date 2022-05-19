const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?f=c',
  );
  const result = await response.json();
  return result.meals;
};

export default getMeals;
