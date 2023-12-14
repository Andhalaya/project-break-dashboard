const images = [
    "url('./assets/background-1.jpg')",
    "url('./assets/background-2.jpg')",
    "url('./assets/background-3.jpg')",
    "url('./assets/background-4.jpg')",
    "url('./assets/background-5.jpg')",
    "url('./assets/background-6.jpg')",
    "url('./assets/background-7.jpg')",
];
function changeBackground(){

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
}

setInterval(changeBackground, 5000);



