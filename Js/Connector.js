window.addEventListener('DOMContentLoaded', function () {
  fetch('../FooterHeader/Header.html')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('#header').innerHTML = data;
    });
});
window.addEventListener('DOMContentLoaded', function () {
  fetch('../FooterHeader/Footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('#footer').innerHTML = data;
    });
});
