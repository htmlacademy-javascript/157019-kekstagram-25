
function createModalWindow(pictureDiscription) {
  const picture = document.querySelector('.big-picture__img').querySelector('img');
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  const socialComments = document.querySelector('.social__comments');
  picture.src = pictureDiscription.url;
  likesCount.textContent = pictureDiscription.likes.toString();
  commentsCount.textContent = pictureDiscription.comments.length.toString();
  const socialCommentsItems = pictureDiscription.comments.map(creatModalCommentsTemplate).join();
  socialComments.innerHTML = socialCommentsItems;
}


function creatModalCommentsTemplate({ avatar, name, message }) {
  return `<li class="social__comment">
    <img
      class="social__picture"
      src="${avatar}"
      alt="${name}"
      width="35" height="35">
      <p class="social__text">${message}</p>
  </li>`;
}

export {creatModalCommentsTemplate, createModalWindow};

