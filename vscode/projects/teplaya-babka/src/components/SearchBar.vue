<script setup>
document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchBtn");
  const loadPageButton = document.getElementById("LoadPage");
  const loadMoreButton = document.getElementById("loadMoreButton");
  const videoContainer = document.getElementById("videoContainer");
  const searchTitle = document.querySelector(".search-title p");
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query");
  const video = document.querySelector("source");


  if (query) {
    searchInput.value = query;
  }

  // Функция поиска
  function searchVideo() {
    const query = searchInput.value.trim();

    if (query) {
      window.location.href = `../search-result/result.html?query=${encodeURIComponent(
        query
      )}`;
    }
  }
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchVideo();
    }
  });

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    searchVideo();
  });

  searchTitle.innerHTML = `${query} лучшие видео`;
}
);
</script>