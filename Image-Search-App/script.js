const searchInput = document.getElementById("search");
const searchButton = document.getElementById("btn");
const searchForm = document.getElementById("search-form");
const resultsContainer = document.getElementById("results");
const showMoreButton = document.getElementById("showMore");

let page = 1;
const apiKey = "6qZZKs5JcJ26CXvRftmVn_aHsYJ7EerCE9OZvEE4YRU";
let searchitem = "";
async function fetchImages() {
  searchitem = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchitem}&client_id=${apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    if (page === 1) {
      resultsContainer.innerHTML = "";
    }

    const imagesHTML = data.results
      .map(
        (image) =>
          `<img src="${image.urls.small}" alt="${
            image.alt_description || "Image"
          }" class="result-img">`
      )
      .join("");

    resultsContainer.innerHTML += imagesHTML;

    data.total_pages > page
      ? (showMoreButton.style.display = "block")
      : (showMoreButton.style.display = "none");
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  fetchImages();
});
showMoreButton.addEventListener("click", () => {
  page++;
  fetchImages();
});
