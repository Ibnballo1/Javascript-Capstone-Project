// Fetch item from API
import displayList from './display_list.js';

const getData = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const request = new Request(url);
  const results = await fetch(request);
  const mealObj = await results.json();
  const result = mealObj.categories;
  displayList(result);
  return result;
};
export default getData;