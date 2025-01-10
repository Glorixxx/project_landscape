function showModal() {
  document.getElementById('ageModal').style.display = 'flex';
  
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
}

function hideModal() {
  document.getElementById('ageModal').style.display = 'none'; 
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

window.onload = function() {
  showModal();
}
