const MAX_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = document.querySelector('.social__comments-loader');
const currentCommentsCount = document.querySelector('.current-comments-count');

const renderComment = (comment) => {
  const {avatar, name, message} = comment;

  const pattern = commentTemplate.cloneNode(true);
  pattern.querySelector('.social__picture').src = avatar;
  pattern.querySelector('.social__picture').alt = name;
  pattern.querySelector('.social__text').textContent = message;

  return pattern;
};

const addComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.appendChild(renderComment(comment));
  });

  socialCommentsList.appendChild(fragment);
};

let count = 0;
let  pictureComments = [];

const onCommentsLoaderClick = () => {
  const nextComments = pictureComments.slice(count, count + MAX_COMMENTS_COUNT);
  addComments(nextComments);

  count += nextComments.length;
  currentCommentsCount.textContent = count;

  if (count >= pictureComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const updateModalWindow = (picture) => {
  pictureComments = picture.comments;
  count = Math.min(pictureComments.length, MAX_COMMENTS_COUNT);

  socialCaption.textContent = picture.description;
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = pictureComments.length;
  currentCommentsCount.textContent = count;

  addComments(pictureComments.slice(0, count));

  if (pictureComments.length <= +currentCommentsCount.textContent) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export {updateModalWindow};
