var showAllButton = document.querySelector(".show-all-brands");
var brandsList = document.querySelector('.brands-inner-wrapper');

showAllButton.addEventListener('click', function () {
  showAllButton.classList.toggle('show-all-brands--hidden');
  brandsList.classList.toggle('brands--hidden');
  if (showAllButton.classList.contains("show-all-brands--hidden")) {
    showAllButton.textContent = 'Скрыть';
  } else {
    showAllButton.textContent = 'Показать все';
  }
});

var equipmentShowAllButton = document.querySelector(".equipment-show-all");
var equipmentList = document.querySelector('.equipment-inner-wrapper');

equipmentShowAllButton.addEventListener('click', function () {
  equipmentShowAllButton.classList.toggle('equipment-show-all--hidden');
  equipmentList.classList.toggle('equipment--hidden');
  if (equipmentShowAllButton.classList.contains("equipment-show-all--hidden")) {
    equipmentShowAllButton.textContent = 'Скрыть';
  } else {
    equipmentShowAllButton.textContent = 'Показать все';
  }
});

var aboutButton = document.querySelector('.about-button');
var hiddenText = document.querySelector('.about-text__paragraph');

aboutButton.addEventListener('click', function () {
  aboutButton.classList.toggle('about-button--hidden');
  hiddenText.classList.toggle('about-text--hidden');
  if (aboutButton.classList.contains("about-button--hidden")) {
    aboutButton.textContent = 'Скрыть';
  } else {
    aboutButton.textContent = 'Читать далее';
  }
});

