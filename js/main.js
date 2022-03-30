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