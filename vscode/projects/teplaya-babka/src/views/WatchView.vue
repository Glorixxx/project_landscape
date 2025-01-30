<template>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Лучший поисковик премиум HD видео | ТеплыйДед</title>
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" href="../css/header.css" />
    <link rel="stylesheet" href="../css/modal.css" />
    <link rel="stylesheet" href="./video.css" />
    <link rel="stylesheet" href="../css/search-header.css" />
    <link rel="stylesheet" href="../css/tags.css" />
    <link rel="icon" href="../img/favicon.ico" />
    <link rel="stylesheet" href="../search-result/result.css" />
  </head>

  <body>
    <div id="ageModal" class="modal">
      <div class="modal-content">
        <img src="../img/18+.png" alt="18+" />
        <h2>Подтверждение возраста</h2>
        <p>Вы подтверждаете, что вам уже есть 18 лет?</p>
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
        <a href="../new-video/new-video.html">
          <img src="../img/logo.svg" alt="ТеплыйДед" />
        </a>
      </div>
      <div id="searchModal" class="searchModal">
        <div class="search-modal-content">
          <input type="text" id="searchInput" placeholder="Поиск..." />
          <button id="searchBtn" onclick="searchVideo()">
            <img src="../img/search.svg" alt="найти" />
          </button>
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <div class="tags-container">
          <div class="tag">Популярное</div>
          <div class="tag">Смотрят сейчас</div>
          <div class="tag">sofilad</div>
          <div class="tag">зрелые женщины</div>
          <div class="tag">трансы</div>
          <div class="tag">дота2</div>
          <div class="tag">анал</div>
          <div class="tag">уличная проститутка</div>
          <div class="tag">домашнее с разговорами</div>
          <div class="tag">милфы</div>
          <div class="tag">межрассовое</div>
          <div class="tag">малолетние дрочеры</div>
          <div class="tag">meikoul</div>
          <div class="tag">Большой член</div>
          <div class="tag">18 летние</div>
          <div class="tag">hentai uncensored</div>
          <div class="tag">дилдо анал</div>
          <div class="tag">Девственница</div>
        </div>

        <div class="video-section">
          <div class="video-container" id="videoContainer">
            <video controls>
              <source src="../video/Horisontal.mp4" type="video/mp4" />
              Ваш браузер не поддерживает тег video.
            </video>
          </div>
          <div class="comments-container">мб комменты, но пока реклама</div>
        </div>
        <div class="video-description">
          <div class="info-description">
            <h1>
              Мелкий пиздюк почувствовал себя как на СВО и пострелял из собаки
              по хохлам
            </h1>
            <div class="views-info">
              <div class="views-info-container">
                489.78К просмотров
                <div class="like-container">
                  <button id="likeID">
                    <div class="like">👍<span id="likeCount">86</span></div>
                  </button>
                  <button id="dislikeID">
                    <div class="dislike">
                      👎<span id="dislikeCount">12</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Закрывающий тег для .container -->

      <section class="section-control">
        <!-- Секция с видео -->
        <div class="video-grid">
          <!-- тут контент закидать -->
          <div class="video-box">
            <a href="../watch/video.html">
              <div class="video-item">
                <img src="../img/дедуля.jpg" alt="Видео" />
              </div>
              <div class="video-description">
                <h4>Веселый дедушка</h4>
              </div>
            </a>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
          <div class="video-box">
            <div class="video-item">
              <img src="" alt="Видео" />
            </div>
            <div class="video-description">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </div>
      </section>
    </main>

    <script src="../js/modal.js"></script>
    <script src="../js/search.js"></script>
    <script src="../js/video.js"></script>
  </body>

</template>