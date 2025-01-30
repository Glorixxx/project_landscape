<template>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Лучший поисковик премиум HD видео | DOJKI.online</title>
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="../css/header.css" />
    <link rel="stylesheet" href="./new-video.css" />
    <link rel="stylesheet" href="../css/modal.css" />
    <link rel="icon" href="../img/favicon.ico" />
    <link rel="stylesheet" href="../css/search-middle.css" />
  </head>

  <body>
    <div id="ageModal" class="modal">
      <div class="modal-content">
        <img src="../img/18+.png" alt="18+" />
        <h2>Подтверждение возраста</h2>
        <p>Вы подтверждаете, что вам уже есть 18 лет?</p>
        <br />
        <label>
          <input type="checkbox" id="ageCheckbox" onclick="toggleButton()" />
          Мне есть 18 лет
        </label>

        <button id="confirmBtn" onclick="ageConfirmed()" disabled>
          Подтверждаю
        </button>
      </div>
    </div>

    <header>
      <div class="logo">
        <div class="container">
          <a href="#"><img src="../img/logo.svg" alt="ТеплыйДед" /></a>
        </div>
      </div>
    </header>

    <main>
      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
      </div>

      <div id="searchModal" class="searchModal">
        <div class="search-modal-content">
          <input type="text" id="searchInput" placeholder="Поиск..." required />
          <router-link to="/src/views/SearchView.vue">
            <button id="searchBtn" onclick="searchVideo()">
              <img src="../img/search.svg" alt="найти" />
            </button>
          </router-link>
        </div>
      </div>
    </main>
    <footer>
      <!-- <div class="footer-links">
        <a href="">О нас</a>
        <a href="">Поддержка</a>
        <a href="">Партнерская программа</a>
        <a href="">Пользовательское соглашение</a>
      </div> -->
      <div class="love-msg">
        <p>
          <a href="#"><span>DOJKI</span></a> - Сделано с <span>❤</span>
        </p>
      </div>
    </footer>
    <script src="../js/modal.js"></script>
    <script src="../js/search.js"></script>
  </body>

</template>

<script>
import HomeView from '/src/views/HomeView.vue';
import Header from '/src/components/Header.vue';

export default {
  name: 'App',
  components: {
    HomeView,
  },
  name: 'Header',
  components: {
    Header,
  },
};
</script>