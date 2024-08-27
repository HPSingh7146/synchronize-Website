// Define the array of images
const images = [
  './res/slide/1.png',
  './res/slide/2.png',
  './res/slide/3.png',
  './res/slide/4.png',
  './res/slide/5.png',
  './res/slide/6.png',
  './res/slide/7.jpg',
  './res/slide/8.png',
  './res/slide/9.png',
  './res/slide/10.png',
  './res/slide/11.png',
  './res/slide/12.jpg',
];

// Get the img element
const imgElement = document.getElementById('myImage');

// Initialize the current image index
let currentIndex = 0;

// Set the initial image
imgElement.src = images[currentIndex];

console.log('Initial image:', imgElement.src);

// Set the interval to change the image every 5 seconds
setInterval(() => {
  // Increment the current image index
  currentIndex = (currentIndex + 1) % images.length;

  console.log('Current index:', currentIndex);

  // Set the next image
  imgElement.src = images[currentIndex];

  console.log('Next image:', imgElement.src);
}, 5000);

const exploreMoreButton = document.getElementById('explore-more-button');
const popup = document.querySelector('.popup');

exploreMoreButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.add('hidden');
  }
});

