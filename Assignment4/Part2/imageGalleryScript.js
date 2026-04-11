/*
Name: Nathaniel Shearing
  File: imageGalleryScript
  Date: 09 April 2026
  Javascript file that is linked with the imageGallery html file.
  This file contains the javascript code that controls the interactions
  on the html page. 

*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const btnClass = btn.classList;
const images = [
    { filename: "pic1.jpg", alt: "Closeup of a human eye." },
    { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
    { filename: "pic3.jpg", alt: "Purple and white pansies" },
    { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {

    const newImageElement = document.createElement("img");

    newImageElement.src = `${baseURL}${image.filename}`;

    newImageElement.alt = image.alt;

    newImageElement.tabIndex = "13";

    thumbBar.appendChild(newImageElement);

    newImageElement.addEventListener("click", changeDisplayedImage);

    newImageElement.addEventListener("keydown",(enter)=>{
        if (enter.code === "Enter"){
            changeDisplayedImage(enter);
        }
    });
}
function changeDisplayedImage(enter){  
    displayedImage.src = enter.target.src;
    displayedImage.alt = enter.target.alt;
}

btn.addEventListener("click",() =>{
    if (btnClass == ("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
        btnClass.remove("dark");
    }
    else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.0)";
        btn.className = "dark";
    }
    }
);
