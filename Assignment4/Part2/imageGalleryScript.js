/*
Name: Nathaniel Shearing
  File: sillyStoryScript
  Date: 09 April 2026
  Javascript file that is linked with the imageGallery html file.
  This file contains the javascript code that controls the interactions
  on the html page. 

*/


const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    {filename: "pic1.jpg", alt:"Closeup of a human eye."},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images){
    const newImageElement = document.createElement("img");
    newImageElement.src = (baseURL + image.filename);
    newImageElement.alt = (image.alt);
    newImageElement.tabIndex = "0";
    thumbBar.appendChild(newImageElement);
    newImageElement.addEventListener('click',updateDisplayedImage());
    newImageElement.addEventListener("keydown",(enter)=>{
        if (enter.code === "Enter"){
            updateDisplayedImage(enter);
        }
    });
}