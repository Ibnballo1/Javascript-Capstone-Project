import { getComment } from './involvementApi.js';

const commentCounter = (IdMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(IdMeal);
  CommentData.then((value) => {
    commentCounterEl.innerHTML = `${value.length}`;
  });
};
export default commentCounter;