<script>
// Показать модальное окно
function showModal() {
  document.getElementById('ageModal').style.display = 'flex';

  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
}

// Скрыть модальное окно
function hideModal() {
  document.getElementById('ageModal').style.display = 'none';
  const now = new Date().getTime();
  localStorage.setItem('modalClosedAt', now);
}

function toggleButton() {
  const checkbox = document.getElementById('ageCheckbox');
  const confirmButton = document.getElementById('confirmBtn');

  confirmButton.disabled = !checkbox.checked;
}

function ageConfirmed() {
  hideModal();
  document.querySelector('header').style.display = 'block';
  document.querySelector('main').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
}


function checkModal() {
  const lastClosedAt = localStorage.getItem('modalClosedAt');
  const now = new Date().getTime();

  if (lastClosedAt && now - lastClosedAt < 20 * 60 * 1000) {
    return;
  }

  showModal();
}

//проверка при загрузке страницы
window.onload = function () {
  checkModal();
};
</script>