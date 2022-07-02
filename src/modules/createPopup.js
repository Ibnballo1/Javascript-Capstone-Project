import { getData } from './get-items.js';
import { addNewComment, createCommentList } from './commentManager.js';
const createPopup = (meal) => {
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popupContainer';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = `popup${meal.idCategory}`;
  popup.innerHTML = `
  <i class="fa-solid fa-xmark close-popup"></i>
  <div class="imageContainer">
  <img src="${meal.strCategoryThumb}" alt="${meal.strCategory}" />
  </div>
  <h3 class="meal-title">${meal.strCategory}</h3>
  <p class="meal-description">${meal.strCategoryDescription}</p>
  <div class="commentContainer">
  <h3><span id="commentCounter" class="commentCounter"></span> Comments</h3>
  <ul class="commentList" id="commentList">
  </ul>
  <h3>Add a comment</h3>
  <form class="commentForm">
  <input type="text" name="contentId" id="contentId" style="display:none" value="item${meal.idCategory}">
  <input type="text" name="username" id="username" placeholder="Your name">
  <textarea name="message" id="message" class="commentMessage cols="30" placeholder="Your message" rows="7"></textarea>
  <button type="button" id="commentBtn">Comment</button>
  </form>
  </div>
  `;
  popupContainer.appendChild(popup);
  document.body.appendChild(popupContainer);
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.remove();
  });
};
const popup = () => {
  //console.log('comment created');
  const btns = document.querySelectorAll('.comment-btn');
  btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=> {
     const id = e.target.id.slice(10)
    // console.log(id);
     getData().then(({ listOfFood }) => {
      //console.log(listOfFood);
        const food = getFood(listOfFood, id)[0]
        //console.log(food);
        createPopup(food)
      })
    })
  })
  const getFood = (arr, id)=> {
    return arr.filter(food=>food.idCategory==id)
  };
};
export default popup;