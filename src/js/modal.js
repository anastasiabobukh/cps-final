var overlay = document.querySelector('.overlay');
// callback modal
var callButton = document.querySelector('.call-btn');
var callButtonBurger = document.querySelector('.brg-call-btn');
var callModal = document.querySelector('.call-modal');
var closeCallButton = document.querySelector('.close-call-btn');

callButton.addEventListener('click', function () {
  callModal.classList.remove('call-modal--hide');
  overlay.classList.add('overlay--active');
});

callButtonBurger.addEventListener('click', function () {
  callModal.classList.remove('call-modal--hide');
  overlay.classList.add('overlay--active');
});

closeCallButton.addEventListener('click', function () {
  callModal.classList.add('call-modal--hide');
  overlay.classList.remove('overlay--active');
});


// feedback modal
var feedbackButton = document.querySelector('.feedback-btn');
var feedbackButtonBurger = document.querySelector('.brg-feedback-btn');
var feedbackModal = document.querySelector('.feedback-modal');
var closefeedbackButton = document.querySelector('.close-feedback-btn');

feedbackButton.addEventListener('click', function () {
  feedbackModal.classList.remove('feedback-modal--hide');
  overlay.classList.add('overlay--active');
});

feedbackButtonBurger.addEventListener('click', function () {
  feedbackModal.classList.remove('feedback-modal--hide');
  overlay.classList.add('overlay--active');
});

closefeedbackButton.addEventListener('click', function () {
  feedbackModal.classList.add('feedback-modal--hide');
  overlay.classList.remove('overlay--active');
});
