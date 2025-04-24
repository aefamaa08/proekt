const favoritesList = document.getElementById("favoritesList");

// Sevimlilarni olish va ko'rsatish
function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = `
      <p style="text-align:center; font-size: 20px; color: gray; margin-top: 50px;">
        Sevimlilar ro'yxati bo'sh!
      </p>
    `;
    return;
  }

  favorites.forEach(movie => {
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
        <button class="remove-from-favorites">O'chirish</button>
      </div>
    `;

    // O'chirish tugmasi
    const removeFromFavoritesButton = movieCard.querySelector('.remove-from-favorites');
    removeFromFavoritesButton.addEventListener('click', () => {
      removeFromFavorites(movie);
    });

    favoritesList.appendChild(movieCard);
  });
}

// O'chirish funksiyasi
function removeFromFavorites(movie) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(fav => fav.title !== movie.title);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  renderFavorites(); // Sevimlilarni qayta chizish
}

renderFavorites(); // Sahifa yuklanganda sevimlilarni ko'rsatish
