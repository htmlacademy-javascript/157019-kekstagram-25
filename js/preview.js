const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileUpload = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');
const buttonUpload = document.querySelector('.img-upload__submit');

fileUpload.addEventListener('change', () => {
  const file = fileUpload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
  buttonUpload.addEventListener('click', () => {
    preview.src = '';
  });
});

