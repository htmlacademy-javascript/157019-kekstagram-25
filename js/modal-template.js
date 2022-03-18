const bigPicture = document.querySelector('.big-picture');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');

const socialCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const picturesCommentFragment = document.createDocumentFragment();

const updateComments = (pictureDiscription) => {

  while (socialCommentsList.firstChild) {
    socialCommentsList.removeChild(socialCommentsList.lastChild);
  }

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

  bigPicture.src = pictureDiscription.url;
  likesCount.textContent = pictureDiscription.likes.toString();
  commentsCount.textContent = pictureDiscription.comments.length.toString();
  updateComments(pictureDiscription);
}

export {updateModalWindow};


