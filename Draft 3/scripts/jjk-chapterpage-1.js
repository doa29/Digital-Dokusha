const apiUrl = "http://0.0.0.0:3000/manga/mangadex/read/f029b37f-2c4a-4069-a97f-d2440e7595f4";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    updateImages(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function updateImages(images) {
  const imageColumn = document.getElementById('chapter-images');
  imageColumn.innerHTML = ''; // Clear any existing content

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.img;
    imgElement.alt = `Page ${image.page}`;
    imgElement.classList.add('chapter-image');
    imageColumn.appendChild(imgElement);
  });
}
