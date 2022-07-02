import getFood from './getfood.js';
import itemCounter from './itemCount.js';
import { getData, addLikes } from './get-items.js';
import popup from './createPopup.js';

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
const displayList = () => {
  getData().then(({listOfFood}) => {
    const displayItemBlock = document.getElementById('display-item-block');
    const allFoods = document.getElementById('item-counter');
    displayItemBlock.innerHTML = '';
    addLikes().then((arrOfLikes)=>{
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
    })
  });
};
export default displayList;