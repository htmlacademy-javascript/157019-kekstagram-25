let MAX_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = document.querySelector('.social__comments-loader');


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
  console.log(socialCommentsList);
};

const updateModalWindow = (picture) => {
  socialCaption.textContent = picture.description;
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  addComments(picture.comments.slice(0, MAX_COMMENTS_COUNT));
  console.log(picture.comments);
};

// commentsLoader.addEventListener('click', () => addComments(picture.comments.slice(0, MAX_COMMENTS_COUNT += 5 ));

export {updateModalWindow};


