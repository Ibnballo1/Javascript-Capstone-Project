// Fetch item from API
import itemCounter from './itemCount.js';
import getFood from './getfood.js';
import popup from './createPopup.js'; // eslint-disable-line

const newLikes = () => {
  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((eachLike) => {
    eachLike.addEventListener('click', (e) => {
      const id = Number(e.target.id.slice(4));
      addLikes({ item_id: id }); // eslint-disable-line
    });
  });
};

const getObj = (arrLike) => {
  const obj = {};
  arrLike.forEach((eachLike) => {
    obj[Number(eachLike.item_id)] = Number(eachLike.likes);
  });
  return obj;
};

const displayList = (mealsCategory, allLikes) => {
  const displayItemBlock = document.getElementById('display-item-block');
  const allFoods = document.getElementById('item-counter');
  displayItemBlock.innerHTML = '';

  const eachObj = getObj(allLikes);
  mealsCategory.forEach((element) => {
    const mealId = Number(element.idCategory);
    const eachLike = eachObj[mealId];
    const itemList = document.createElement('div');
    itemList.classList = `display-item-${element.idCategory} display-items`;
    allFoods.innerHTML = `${itemCounter(mealsCategory)}`;

    if (mealId in eachObj) {
      itemList.innerHTML = getFood(element, eachLike);
    } else {
      itemList.innerHTML = getFood(element);
    }
    displayItemBlock.appendChild(itemList);
  });
  newLikes();
};

const getData = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CRIAnYLyDDdetPKpfqDg/likes/';
  const results = await fetch(url);
  const results2 = await fetch(url2, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const mealObj = await results.json();
  const likesObj = await results2.json();
  const result = mealObj.categories;

  displayList(result, likesObj);
  return result;
};

// Add Likes
const addLikes = async (like) => {
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CRIAnYLyDDdetPKpfqDg/likes/';
  const result3 = await fetch(url2, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const sendData = result3.text();
  getData();
  popup();
  return sendData;
};

export default getData;