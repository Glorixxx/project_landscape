<script>
let likeCount = 86;
let dislikeCount = 12;

//отслеживание голосования
let hasVoted = false;

const likeElement = document.getElementById("likeCount");
const dislikeElement = document.getElementById("dislikeCount");
const likeButton = document.getElementById("likeID");
const dislikeButton = document.getElementById("dislikeID");
//обновление кнопок
function updateButtons() {
  likeElement.textContent = likeCount;
  dislikeElement.textContent = dislikeCount;
}

function disableButtons() {
  likeButton.disabled = true; //откл лайк
  dislikeButton.disabled = true; //откл диз
}

//лайк
likeButton.addEventListener("click", function () {
  if (!hasVoted) { //проверяем, голосовал ли пользователь
    likeCount += 1;
    updateButtons();
    hasVoted = true;
    disableButtons();
    console.log("Лайков:", likeCount);
  }
});

//дизы
dislikeButton.addEventListener("click", function () {
  if (!hasVoted) {
    dislikeCount += 1;
    updateButtons();
    hasVoted = true;
    disableButtons();
    console.log("Дизлайков:", dislikeCount);
  }
});
updateButtons();
</script>