// Fetch item from API
const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jXZgiKMzDT5B7SmkaTBY/likes/';
const getData = async () => {
  // console.log('fetch called');
  const results = await fetch(url);
  // if(results.ok) console.log('retrieved food success');
  const results2 = await fetch(url2);
  // if(results2.ok) console.log('retrived likes success');
  const mealObj = await results.json();
  const likesObj = await results2.json();
  const result = mealObj.categories;
  // console.log(likesObj, result);
  const arrOfLikes = JSON.parse(JSON.stringify(likesObj));
  const listOfFood = JSON.parse(JSON.stringify(result));
  return { listOfFood };
};
// Add Likes
const addLikes = async (like) => {
  if(like) {
    const result3 = await fetch(url2, {
      method: 'POST',
      body: JSON.stringify(like),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return;
  }
  const results2 = await fetch(url2);
  const likesObj = await results2.json();
  return likesObj;
};
export { getData, addLikes };