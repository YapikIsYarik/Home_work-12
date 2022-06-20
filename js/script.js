'use strict';
//snow
document.addEventListener('DOMContentLoaded', function () {
   let script = document.createElement('script');
   script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
   script.onload = function () {
      particlesJS("snow", {
         "particles": {
            "number": {
               "value": 200,
               "density": {
                  "enable": true,
                  "value_area": 500
               }
            },
            "color": {
               "value": "#ffffff"
            },
            "opacity": {
               "value": 0.7,
               "random": false,
               "anim": {
                  "enable": false
               }
            },
            "size": {
               "value": 4,
               "random": true,
               "anim": {
                  "enable": false
               }
            },
            "line_linked": {
               "enable": false
            },
            "move": {
               "enable": true,
               "speed": 5,
               "direction": "bottom",
               "random": true,
               "straight": false,
               "out_mode": "out",
               "bounce": false,
               "attract": {
                  "enable": true,
                  "rotateX": 100,
                  "rotateY": 100,
               }
            }
         },
         "interactivity": {
            "events": {
               "onhover": {
                  "enable": false
               },
               "onclick": {
                  "enable": false
               },
               "resize": false
            }
         },
         "retina_detect": true
      });
   }
   document.head.append(script);
});

//music

const sound1 = new Audio("audio/sound1.mp3");
const sound2 = new Audio("audio/sound2.mp3");
const sound3 = new Audio("audio/sound3.mp3");
const sound4 = new Audio("audio/sound4.mp3");
const sound5 = new Audio("audio/sound5.mp3");
const sound6 = new Audio("audio/sound6.mp3");
const sound7 = new Audio("audio/sound7.mp3");
const sound8 = new Audio("audio/sound8.mp3");
const sound9 = new Audio("audio/sound9.mp3");
const sound10 = new Audio("audio/sound10.mp3");
const sound11 = new Audio("audio/sound11.mp3");
const sound12 = new Audio("audio/sound12.mp3");
const sound13 = new Audio("audio/sound13.mp3");
const sound14 = new Audio("audio/sound14.mp3");
const sound15 = new Audio("audio/sound15.mp3");
const sound16 = new Audio("audio/sound16.mp3");
const sound17 = new Audio("audio/sound17.mp3");
const sound18 = new Audio("audio/sound18.mp3");
const sound19 = new Audio("audio/sound19.mp3");
const sound20 = new Audio("audio/sound20.mp3");
const sound21 = new Audio("audio/sound21.mp3");
const sound22 = new Audio("audio/sound22.mp3");
const sound23 = new Audio("audio/sound23.mp3");
const sound24 = new Audio("audio/sound24.mp3");
const sound25 = new Audio("audio/sound25.mp3");
const sound26 = new Audio("audio/sound26.mp3");


function play(e) {
   switch (e) {
      case "q":
         sound1.play();
         break;
      case "w":
         sound2.play();
         break;
      case "e":
         sound3.play();
         break;
      case "r":
         sound4.play();
         break;
      case "t":
         sound5.play();
         break;
      case "y":
         sound6.play();
         break;
      case "u":
         sound7.play();
         break;
      case "i":
         sound8.play();
         break;
      case "o":
         sound9.play();
         break;
      case "p":
         sound10.play();
         break;
      case "a":
         sound11.play();
         break;
      case "s":
         sound12.play();
         break;
      case "d":
         sound13.play();
         break;
      case "f":
         sound14.play();
         break;
      case "g":
         sound15.play();
         break;
      case "h":
         sound16.play();
         break;
      case "j":
         sound17.play();
         break;
      case "k":
         sound18.play();
         break;
      case "l":
         sound19.play();
         break;
      case "z":
         sound20.play();
         break;
      case "x":
         sound21.play();
         break;
      case "c":
         sound22.play();
         break;
      case "v":
         sound23.play();
         break;
      case "b":
         sound24.play();
         break;
      case "n":
         sound25.play();
         break;
      case "m":
         sound26.play();
         break;
   }
}
document.addEventListener('keydown', function (e) {
   play(e.key);
   const keys = document.getElementById(`${e.key}`);
   keys.classList.toggle('active');
   setTimeout(function () {
      keys.classList.remove('active');
   }, 1000)
});
document.querySelector('.keys').addEventListener("click", function (e) {
   play(e.target.id);
   const keys = document.getElementById(`${e.target.id}`);
   keys.classList.toggle('active');
   setTimeout(function () {
      keys.classList.remove('active');
   }, 1000)
});