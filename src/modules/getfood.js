const getFood = ({ idCategory, strCategoryThumb, strCategory }, likes = 0) => {
  const eachList = `
    <div class="item-img-block">
        <img class="images" src="${strCategoryThumb}" alt="Chicken">
    </div>
    <div class="item-title-like">
        <h2 class="title-1 titles">${strCategory}</h2>
        <div class="likes-block">
            <button  id="like${idCategory}" class="like like${idCategory}">&#10084;</button>
            <p class="item-likes likes">${likes < 2 ? `${likes} Like` : `${likes}  Likes`}</p>
        </div>
    </div>
    <button type="button" id="commentBtn${idCategory}" class="comment-btn">Comments</button>
  `;
  return eachList;
};

export default getFood;