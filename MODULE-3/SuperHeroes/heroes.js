const moviesContainer = document.querySelector('.movies-container');
const input = document.querySelector('.input');
const button = document.querySelector('.button');


  formatMovies = (data) => {
    const div = document.createElement("div")
    div.innerText = data.Released;

    const img = document.createElement("img");
    img.src = data.Poster;

    moviesContainer.append(div);
    moviesContainer.append(img);
  };

button.addEventListener('click', () => {
  const title = input.value;
  const baseUrl = 'https://www.omdbapi.com/?s=batman&apikey=cd06f505'
  const movieUrl = 'https://www.omdbapi.com/?s=batman&apikey=cd06f505';

  fetch(movieUrl)
    .then((response) => response.json())
    .then((data) => {
      // formatMovies(data);
      const list = data.Search; 
      list.map((data) => {
        formatMovies(data)
      })

    });
});



