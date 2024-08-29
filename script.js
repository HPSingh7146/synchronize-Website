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



const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('nav');
  menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

const card = document.getElementById('popup');
const agora = document.getElementById('popup-Agora');
const cV = document.getElementById('popup-CodeVerse')
const weblynx = document.getElementById('popup-Weblynx')
const syn = document.getElementById('popup-Synergia')
const bq = document.getElementById('popup-ByteQuest')
const th = document.getElementById('popup-TechHunt')
const val = document.getElementById('popup-Val')
const vid = document.getElementById('popup-Vid')
const px = document.getElementById('popup-Px')
const iot = document.getElementById('popup-IOT')
const inspira = document.getElementById('popup-Inspira')

function openModal() {
  card.style.left = "2.5%";
}

function openAgora() {
  agora.style.left = "2.5%";
}

function closeAgora() {
  agora.style.left = "100%"
}

function openCodeVerse() {
  cV.style.left = "2.5%"

}

function closeCodeVerse() {
  cV.style.left = "100%"
}

function openSynergia() {
  syn.style.left = "2.5%"
}

function closeSynergia() {
  syn.style.left = "100%"
}

function openWeblynx() {
  weblynx.style.left = "2.5%"

}

function closeWeblynx() {
  weblynx.style.left = "100%"
}

function openByteQuest() {
  bq.style.left = "2.5%"
}

function closeByteQuest() {
  bq.style.left = "100%"
}

function openTechHunt() {
  th.style.left = "2.5%"
}

function closeTechHunt() {
  th.style.left = "100%"
}

function openVal() {
  val.style.left = "2.5%"
}

function closeVal() {
  val.style.left = "100%"
}

function openVid() {
  vid.style.left = "2.5%"
}

function closeVid() {
  vid.style.left = "100%"
}

function openPx() {
  px.style.left = "2.5%"
}

function closePx() {
  px.style.left = "100%"
}

function openIOT() {
  iot.style.left = "2.5%"
}

function closeIOT() {
  iot.style.left = "100%"
}

function openInspira() {
  inspira.style.left = "2.5%"
}

function closeInspira() {
  inspira.style.left = "100%"
}



function closeModal() {
  card.style.left = "100%"
}


