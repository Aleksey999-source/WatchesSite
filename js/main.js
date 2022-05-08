"use strict";
//Бургер меню------------------------------
    let burger = document.querySelector('.burger');
    let burgerMenu = document.querySelector('.burger__menu');
    burger.addEventListener('click', function()
{
    burger.classList.toggle('burger--active');
    burgerMenu.classList.toggle('burger--active');
    if (burger.classList.contains('burger--active'))
    {
        document.body.style.overflow = "hidden";
    }
    else
    {
        document.body.style.overflow = "visible";
        
    }
});
const hrefBurger = document.querySelectorAll('.burger__href');
for (let i = 0; i < hrefBurger.length; i++)
{
    hrefBurger[i].addEventListener('click', removeState);
}
function removeState() {
    $('body').css('overflow', 'visible');
    burger.classList.remove('burger--active');
    burgerMenu.classList.remove('burger--active');
}
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
  popupBtn.addEventListener('click', closePopup);
  closeIcon.addEventListener('click', closePopup);
  btn1.addEventListener('click', openPopup);
  function openPopup()
  {
      popup.classList.add('popup--active');
      $('body').css('overflow', 'hidden');
  }


  function closePopup()
  {
      popup.classList.remove('popup--active');
      $('body').css('overflow', 'visible');
  }