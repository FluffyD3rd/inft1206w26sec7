/*
Name: Nathaniel Shearing
  File: bouncingBallScript
  Date: 09 April 2026
  Javascript file that is linked with the bouncingBall html file. 
  This file contains the javascript code for the bouncing ball page.
  It contains the code for the creation and "bouncing" of the balls.

*/

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
