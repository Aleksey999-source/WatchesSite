"use strict";
//Бургер меню------------------------------
    let burger = document.querySelector('.burger');
    burger.addEventListener('click', function()
{
    burger.classList.toggle('burger--active')
});
//Видеоплеер-------------------------------
const video = document.querySelector('#video');
const playBtn = document.querySelector('.video__icon2')
const playBtn2 = document.querySelector('.video__button');
const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

video.addEventListener('click', toggleVideo);
playBtn.addEventListener('click', toggleVideo);
playBtn2.addEventListener('click', toggleVideo);
function toggleVideo()
{
    if  (video.paused)
    {
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
        video.play();
        playBtn.classList.toggle('video__icon2');
        playBtn.classList.toggle('video__icon2--removei');
    }
    else
    {  
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
        playBtn.classList.toggle('video__icon2');
        playBtn.classList.toggle('video__icon2--removei');
        video.pause();
    }
}
//Скрипт плавной прокрутки---------------------
$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });
  });
  //popup-меню-------------------------------
  let popupBtn = document.querySelector('.popup__btn')
  let popup = document.querySelector('.popup');
  let btn1 = document.querySelector('.btn_1');
  let btn2 = document.querySelector('.button');
  btn2.addEventListener('click', openPopup);
  let closeIcon = document.querySelector('.popup__close');
  popupBtn.addEventListener('click', openPopup);
  closeIcon.addEventListener('click', openPopup);
  btn1.addEventListener('click', openPopup);
  function openPopup()
  {
      popup.classList.toggle('popup--active');
  }