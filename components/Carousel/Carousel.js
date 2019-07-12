/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = ['mountains.jpeg', 'computer.jpeg', 'trees.jpeg', 'turntable.jpeg'];

const carouselGen = (pics) => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'carousel';
    carouselContainer.appendChild(carouselDiv);

    const leftButton = document.createElement('div');
    leftButton.className = 'left-button'
    leftButton.textContent = '<'
    console.log(carouselContainer)
    carouselDiv.appendChild(leftButton);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'carouselImgs';
    carouselDiv.appendChild(imageDiv);

    const rightButton = document.createElement('div');
    rightButton.className = 'right-button';
    rightButton.textContent = '>'
    carouselDiv.appendChild(rightButton);

    pics.forEach((img) => {
        const image = document.createElement('img');
        image.src = `./assets/carousel/${img}`
        imageDiv.appendChild(image);
    })
}

carouselGen(images);

let carouselImages = document.querySelector('.carouselImgs');

const firstImage = carouselImages.querySelector('img');
firstImage.style.display = "block";

const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');

let currentImage = firstImage;

const previousImageFn = () => {
    currentImage.style.display = "none";
    if (currentImage.previousElementSibling) {
        carouselImages.lastElementChild.style.display = "block";
        currentImage = carouselImages.lastElementChild;
    } else {
        currentImage.previousElementSibling.style.display = "block";
        currentImage = currentImage.previousElementSibling;
    }
    return currentImage;
}

const nextImageFn = () => {
    currentImage.style.display = "none";
    if (!currentImage.nextElementSibling) {
        firstImage.style.display = "block";
        currentImage = firstImage;
    } else {
        currentImage.nextElementSibling.style.display = "block";
        currentImage = currentImage.nextElementSibling;
    }
    return currentImage;
}

rightButton.addEventListener('click', nextImageFn);
leftButton.addEventListener('click', previousImageFn);
