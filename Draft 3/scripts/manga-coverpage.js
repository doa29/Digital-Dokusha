document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.querySelector('.read-more-button');
    const description = document.querySelector('.description');

    readMoreButton.addEventListener('click', () => {
        if (description.classList.contains('expanded')) {
            description.classList.remove('expanded');
            readMoreButton.textContent = 'Read More';
        } else {
            description.classList.add('expanded');
            readMoreButton.textContent = 'Read Less';
        }
    });
});


const apiUrl = "http://0.0.0.0:3000/manga/mangadex/info/c52b2ce3-7f95-469c-96b0-479524fb7a1a";

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract necessary information
    const mangaTitle = data.title;
    const mangaGenres = data.genres.join(', '); // Convert array to string
    const mangaArtist = ''; // You need to add artist info from the API response
    const mangaLastUpdate = ''; // You need to add last update info from the API response
    const mangaRatings = ''; // You need to add ratings info from the API response
    const mangaDescription = data.description.en; // Assuming English description

    // Update HTML elements with the extracted data
    document.getElementById('manga-image').src = data.image;
    document.getElementById('manga-title').textContent = mangaTitle;
    document.getElementById('manga-genre').textContent = mangaGenres;
    document.getElementById('manga-artist').textContent = mangaArtist;
    document.getElementById('manga-last-update').textContent = mangaLastUpdate;
    document.getElementById('manga-ratings').textContent = mangaRatings;
    document.getElementById('manga-description').textContent = mangaDescription;

 // Populate chapter links
 const chapterLinks = document.getElementById('chapter-links');
 data.chapters.forEach(chapter => {
   const link = document.createElement('a');
   link.href = 'jjk-chapterpage-1.html'; // Add chapter link
   link.textContent = `Chapter ${chapter.chapterNumber}: ${chapter.title}`; // Add chapter number and title
   chapterLinks.appendChild(link);
 });
})
  .catch(error => {
    console.error('Error:', error);
  });
