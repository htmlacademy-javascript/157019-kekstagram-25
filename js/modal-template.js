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

  const commentNode = commentTemplate.cloneNode(true);
  commentNode.querySelector('.social__picture').src = avatar;
  commentNode.querySelector('.social__picture').alt = name;
  commentNode.querySelector('.social__text').textContent = message;

  return commentNode;
};

const addComments = (commentsList) => {
  const fragment = document.createDocumentFragment();
  commentsList.forEach((comment) => {
    fragment.appendChild(renderComment(comment));
  });

  socialCommentsList.appendChild(fragment);
};

let count = 0;
let comments = [];

const onCommentLoaderClick = () => {
  const nextComments = comments.slice(count, count + MAX_COMMENTS_COUNT);
  addComments(nextComments);

  count += nextComments.length;
  currentCommentsCount.textContent = count;

  if (count >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const updateModalWindow = (picture) => {
  comments = picture.comments;
  count = Math.min(comments.length, MAX_COMMENTS_COUNT);

  socialCaption.textContent = picture.description;
  bigPicture.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = comments.length;
  currentCommentsCount.textContent = count;

  addComments(comments.slice(0, count));

  if (comments.length <= currentCommentsCount.textContent) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsLoader.addEventListener('click', onCommentLoaderClick);
};

export {updateModalWindow};
