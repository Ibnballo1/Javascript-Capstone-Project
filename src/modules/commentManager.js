import { addComment, getComment } from './involvementApi.js';
import { commentCounter } from './commentCounter.js';

const createLi = (date, username, comment) => {
  const listCommentContainer = document.getElementById('commentList');
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = `
  <span class="username">${username} .</span>
  <span class="commentDate">${date}</span>
  </br><span class"commentMessage">${comment}</span>`;
  listCommentContainer.appendChild(listItem);
};

const createCommentList = () => {
  const mealId = document.getElementById('contentId');
  const commentData = getComment(mealId.value);
  commentData.then(async (value) => {
    if (await value) {
      value.forEach((element) => {
        createLi(element.creation_date, element.username, element.comment);
      });
    }
  });
  commentCounter(mealId.value);
};

let lastComment = [];
const lastCommentItem = () => {
  const mealId = document.getElementById('contentId');
  const commentData = getComment(mealId.value);
  commentData.then(async (value) => {
    lastComment = await value[value.length - 1];
    createLi(lastComment.creation_date, lastComment.username, lastComment.comment);
  });
};

const addNewComment = () => {
  const mealId = document.getElementById('contentId');
  const username = document.getElementById('username');
  const comment = document.getElementById('message');
  const addCommentBtn = document.getElementById('commentBtn');
  addCommentBtn.addEventListener('click', () => {
    if (username.value && comment.value) {
      addComment(mealId.value, username.value, comment.value);
      setTimeout(lastCommentItem, 500);
      username.value = '';
      comment.value = '';
    }
    setTimeout(commentCounter(mealId.value), 500);
  });
};

export { addNewComment, createCommentList };