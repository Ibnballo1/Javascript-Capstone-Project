// Fetch item from API
const getData = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';
  const results = await fetch(url);
  const results2 = await fetch(url2);
  const mealObj = await results.json();
  const likesObj = await results2.json();
  const result = mealObj.categories;

  const arrOfLikes = JSON.parse(JSON.stringify(likesObj));
  const listOfFood = JSON.parse(JSON.stringify(result));

  //displayList(result, likesObj);
  return { listOfFood, arrOfLikes };
};

// Add Likes
const addLikes = async (like) => {
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';
  const result3 = await fetch(url2, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const sendData = await result3.text();
  //getData();
  return sendData;
};

export { getData, addLikes };
