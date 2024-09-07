
const imageInput = document.getElementById('imageInput');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const uploadBtn = document.getElementById('uploadBtn');
const imageList = document.getElementById('imageList');
const successMessage = document.getElementById('successMessage');

// Load saved images from local storage on page load
window.addEventListener('load', () => {
  const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
  savedImages.forEach(image => displayImage(image));
});

uploadBtn.addEventListener('click', () => {
  const file = imageInput.files[0];
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (file && title && description) {
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = {
        src: reader.result,
        title,
        description
      };

      displayImage(imageData);
      saveImage(imageData);

      // Reset form fields
      imageInput.value = '';
      titleInput.value = '';
      descriptionInput.value = '';

      // Show success message
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000); // Hide the message after 3 seconds
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please fill in all fields and select an image.');
  }
});

function displayImage(imageData) {
  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');

  const img = document.createElement('img');
  img.src = imageData.src;

  const details = document.createElement('div');
  details.classList.add('details');

  const titleEl = document.createElement('h3');
  titleEl.textContent = imageData.title;

  const descriptionEl = document.createElement('p');
  descriptionEl.textContent = imageData.description;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteImage(imageData));

  details.appendChild(titleEl);
  details.appendChild(descriptionEl);

  imageItem.appendChild(img);
  imageItem.appendChild(details);
  imageItem.appendChild(deleteBtn);

  imageList.appendChild(imageItem);
}

function saveImage(imageData) {
  const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
  savedImages.push(imageData);
  localStorage.setItem('uploadedImages', JSON.stringify(savedImages));
}

function deleteImage(imageData) {
  const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
  const updatedImages = savedImages.filter(image => image.src !== imageData.src);
  localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));

  const imageItem = document.querySelector(`.image-item img[src="${imageData.src}"]`).parentElement;
  imageList.removeChild(imageItem);
}
