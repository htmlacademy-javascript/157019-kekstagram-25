const SHUFFLED_LIMIT = 10;

const getShuffledPhotos = (photos) => photos.slice().sort(() => Math.random() - 0.5).slice(0, SHUFFLED_LIMIT);
const getDiscussedPhotos = (photos) => photos.slice().sort((a, b) => b.comments.length - a.comments.length);

export {
  getShuffledPhotos,
  getDiscussedPhotos,
};
