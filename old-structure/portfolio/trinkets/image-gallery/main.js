const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [];
for (let i = 1; i < 6; i++) {
    const fileName = `pic${i}.jpg`;
    images.push(fileName);
}
/* Declaring the alternative text for each image file */
const imageAlts=[];
for (const image of images) {
    imageAlts.push(`This is ${image}`);
}

/* Looping through images */
for (let i = 0; i <5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images[i]}`);
    newImage.setAttribute('alt', imageAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",()=>{
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    const btnState = btn.getAttribute("class");
    if(btnState==="dark"){
        btn.setAttribute("class","light");
        btn.textContent="Lighten";
        overlay.style.background="rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute("class","dark");
        btn.textContent="Darken";
        overlay.style.background="rgb(0 0 0 / 0%)";
    }
})