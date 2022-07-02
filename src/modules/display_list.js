// Displaying Images in the browser
import getFood from './getfood.js';
import itemCounter from './itemCount.js';
import { getData, addLikes } from './get-items.js';
import createPopup from './createPopup.js';

const getObj = (arrLike) => {
  const obj = {};
  arrLike.forEach((eachLike) => {
    obj[Number(eachLike.item_id)] = Number(eachLike.likes);
  });
  return obj;
};

const newLikes = () => {
  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((eachLike) => {
    eachLike.addEventListener('click', (e) => {
      const id = Number(e.target.id.slice(4));
      addLikes({ item_id: id });
      displayList();
    });
  });
};

const popup = () => {
  const mealData = getData();
  mealData.then((value) => {
    for (let i = 0; i < value.length; i += 1) {
      const commentButton = document.getElementById(`commentBtn${value[i].idCategory}`);
      commentButton.addEventListener('click', () => {
        createPopup(value[i]);
        setTimeout(createCommentList, 100);
        setTimeout(addNewComment, 100);
      });
    }
  });
};

const displayList = () => {
  getData().then(({listOfFood, arrOfLikes}) => {
    const displayItemBlock = document.getElementById('display-item-block');
    const allFoods = document.getElementById('item-counter');
    displayItemBlock.innerHTML = '';

    const eachObj = getObj(arrOfLikes);
    listOfFood.forEach((element) => {
      const mealId = Number(element.idCategory);
      const eachLike = eachObj[mealId];
      const itemList = document.createElement('div');
      itemList.classList = `display-item-${element.idCategory} display-items`;
      allFoods.innerHTML = `${itemCounter(listOfFood)}`;

      if (mealId in eachObj) {
        itemList.innerHTML = getFood(element, eachLike);
      } else {
        itemList.innerHTML = getFood(element);
      }
      displayItemBlock.appendChild(itemList);
    });
    newLikes();
    popup();
  });
};

export default displayList;