/*   Name: Rudy Fakih
     Date: November 22, 2024
     Class: Web Development Fundamentals
     Description: In this part of the assignment, we are creating an 
     image gallery, testing our use and skills of loops, functions 
     and events.
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',]

/* Declaring the alternative text for each image file */
const altText = ['Eyeball', 'Rocks', 'Flowers', 'Egyptians', 'Butterfly']

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e){
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;

    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}