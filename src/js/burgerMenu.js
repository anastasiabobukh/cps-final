var burgerButton = document.querySelector('.burger-menu-btn');
var burgerMenu = document.querySelector('.brg-menu');
var closeButton = document.querySelector('.close-btn');
var overlayBrg = document.querySelector('.overlay-brg');

burgerButton.addEventListener('click', function () {
  burgerMenu.classList.toggle('brg-menu--hidden');
  overlayBrg.classList.add('overlay-brg--active');
});

closeButton.addEventListener('click', function () {
  burgerMenu.classList.add('brg-menu--hidden');
  overlayBrg.classList.remove('overlay-brg--active');
})

document.addEventListener('click', function (event) {
  if (
    !burgerMenu.contains(event.target) && !burgerButton.contains(event.target)
  ) {
    burgerMenu.classList.add('brg-menu--hidden');
    overlayBrg.classList.remove('overlay-brg--active');
  }
});

