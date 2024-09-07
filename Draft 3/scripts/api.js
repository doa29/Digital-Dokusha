

//const apiUrl = "http://0.0.0.0:3000/manga/mangadex/read/5f7891b4-f048-4516-9c75-7bcd6dbd1451";
//const apiUrl = "http://0.0.0.0:3000/manga/mangadex/jujutsu-kaisen";



// Sample ID
//const apiUrl = "http://0.0.0.0:3000/manga/mangadex/info/259dfd8a-f06a-4825-8fa6-a2dcd7274230"

const apiUrl = "http://0.0.0.0:3000/manga/mangadex/info/c52b2ce3-7f95-469c-96b0-479524fb7a1a"

// JJk ID
// c52b2ce3-7f95-469c-96b0-479524fb7a1a

// Reading Chapters
//const apiUrl = "http://0.0.0.0:3000/manga/mangadex/read/5f7891b4-f048-4516-9c75-7bcd6dbd1451";



// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

