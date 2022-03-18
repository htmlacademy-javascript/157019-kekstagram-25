const bigPicture = document.querySelector('.big-picture');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');

const socialCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const updateComments = (comment) => {
  const {avatar, name, message} = comment;

  const commentNode = commentTemplate.cloneNode(true);
  commentNode.querySelector('.social__picture').src = avatar;
  commentNode.querySelector('.social__picture').alt = name;
  commentNode.querySelector('.social__text').textContent = message;
  return commentNode;
};

const addComments = (comments) => {

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {

    fragment.appendChild(updateComments(comment));

  });
  socialCommentsList.appendChild(fragment);

};

const updateModalWindow = (picture) => {

  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  addComments(picture.comments);
};

export {updateModalWindow};


