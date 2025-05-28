/**
 * DOM
 */
const gridContainer = document.getElementById("gridContainer");
const movieInput = document.getElementById("movieInput");
const movieCounter = document.getElementById("movieCounter");

const sortButton = document.getElementById("sortButton");
const upperCaseButton = document.getElementById("upperCaseButton");

/**
 * State
 */
let sorted = false;
let searchValue = "";
let upperCase = false;

/**
 * Movies
 */
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings The Return of the King",
  "Pulp Fiction",
  "The Lord of the Rings The Fellowship of the Ring",
  "Forrest Gump",
  "Inception",
  "The Lord of the Rings The Two Towers",
  "One Flew Over the Cuckoo's Nest",
  "Goodfellas",
  "Star Wars Episode V - The Empire Strikes Back",
  "The Matrix",
  "Seven",
  "The Silence of the Lambs",
  "It's a Wonderful Life",
  "The Wizard of Oz",
];

/**
 * Render the movies
 */
function renderMovies() {
  // Filter the movies if searchValue is not empty
  const filteredMovies = movies.filter((movie) => movie.toLowerCase().includes(searchValue));

  // Sort the filtered movies if sorted is true
  const sortedMovies = sorted ? filteredMovies.toSorted() : filteredMovies;

  // Set movie counter
  movieCounter.innerText = sortedMovies.length;

  // Render the movies
  gridContainer.innerHTML = sortedMovies
    .map(
      (movie) => `
    <div class="col col-sm-6 col-md-3">
        <div class="card p-2 m-1">
            <div class="card-body">
                <h5>${upperCase ? movie.toUpperCase() : movie}</h5>
                <p class="text-muted">${movie.toLowerCase().split(" ").join("-")}</p>
            </div>
        </div>
    </div>`
    )
    .join("");
}

renderMovies();

/**
 * Event listeners
 */
movieInput.addEventListener("input", (event) => {
  // Set searchValue
  searchValue = event.target.value.toLowerCase();
  renderMovies();
});

sortButton.addEventListener("click", () => {
  // Toggle sorted
  sorted = !sorted;
  renderMovies();
});

upperCaseButton.addEventListener("click", () => {
  // Toggle upperCase
  upperCase = !upperCase;
  renderMovies();
});
