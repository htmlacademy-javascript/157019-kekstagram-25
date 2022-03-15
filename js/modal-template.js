

const socialCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const picturesCommentFragment = document.createDocumentFragment();

const updateComments = (pictureDiscription) => {
  pictureDiscription.comments.forEach(({ avatar, name, message })=>{
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    picturesCommentFragment.appendChild(comment);
    socialCommentsList.appendChild(picturesCommentFragment);
  });

};

function updateModalWindow(pictureDiscription) {
  const bigPicture = document.querySelector('.big-picture__img').querySelector('img');
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  bigPicture.src = pictureDiscription.url;
  likesCount.textContent = pictureDiscription.likes.toString();
  commentsCount.textContent = pictureDiscription.comments.length.toString();
  updateComments(pictureDiscription);
}

export {updateModalWindow};


