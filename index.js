const moviesList = document.getElementById("moviesList");
const genreSelect = document.getElementById("genre");
const yearSelect = document.getElementById("year");
const ratingSelect = document.getElementById("rating");

let allMovies = [];

// Filmlar ro'yxatini olish
fetch("movies.json")
  .then(response => response.json())
  .then(data => {
    allMovies = data;
    renderMovies(allMovies);
  })
  .catch(error => console.error("Ошибка загрузки фильмов:", error));

// Filmlarni chiqarish funksiyasi
function renderMovies(movies) {
  moviesList.innerHTML = "";

  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    
    movieCard.innerHTML = `
      <a href="${movie.link}" target="_blank" style="text-decoration:none; color:inherit;">
        <img src="${movie.image}" alt="${movie.title}">
      </a>
      <div class="info">
        <h4>${movie.title}</h4>
        <p>Жанр: ${movie.genre}</p>
        <p>Год: ${movie.year}</p>
        <p>Рейтинг: ${movie.rating}</p>
        <p><strong>Цена:</strong> ${movie.price} сум</p>
        <button class="add-to-favorites">Sevimlilarga qo‘shish</button>
        <button class="buy-button">Sotib olish</button>
      </div>
    `;

    const favButton = movieCard.querySelector(".add-to-favorites");
    favButton.addEventListener("click", () => {
      addToFavorites(movie);
    });

    const buyButton = movieCard.querySelector(".buy-button");
    buyButton.addEventListener("click", () => {
      buyMovie(movie);
    });

    moviesList.appendChild(movieCard);
  });
}

// Sevimlilarga qo‘shish
function addToFavorites(movie) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (!favorites.some(fav => fav.title === movie.title)) {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${movie.title} sevimlilarga qo'shildi!`);
  } else {
    alert("Bu film allaqachon sevimlilaringizda!");
  }
}

// Sotib olish
function buyMovie(movie) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.some(m => m.title === movie.title)) {
    cart.push(movie);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  window.open("savat.html", "_blank");
}

// Filtrlash
function filterMovies() {
  const genre = genreSelect.value;
  const year = yearSelect.value;
  const rating = ratingSelect.value;

  const filtered = allMovies.filter(movie => {
    const byGenre = genre === "all" || movie.genre === genre;
    const byYear = year === "all" || movie.year == year;
    const byRating = rating === "all" || movie.rating >= parseFloat(rating);

    return byGenre && byYear && byRating;
  });

  renderMovies(filtered);
}

// Selectlarga event qo‘shish
genreSelect.addEventListener("change", filterMovies);
yearSelect.addEventListener("change", filterMovies);
ratingSelect.addEventListener("change", filterMovies);
