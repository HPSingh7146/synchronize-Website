// Define the array of images
const images = [
  './res/slide/1.png',
  './res/logos/agora.png',
  './res/logos/bytequest.png',
  './res/logos/codeverse.png',
  './res/logos/inspira.png',
  './res/logos/iotize.png',
  './res/logos/pixelate.png',
  './res/logos/synergia.png',
  './res/logos/valorant.png',
  './res/slide/5.png',
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
  navMenu.classList.toggle("-right-[50%]");
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
  card.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function openAgora() {
  agora.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeAgora() {
  agora.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openCodeVerse() {
  cV.style.left = "50%"
  document.body.style.overflowY = "hidden"

}

function closeCodeVerse() {
  cV.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openSynergia() {
  syn.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeSynergia() {
  syn.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openWeblynx() {
  weblynx.style.left = "50%"
  document.body.style.overflowY = "hidden"

}

function closeWeblynx() {
  weblynx.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openByteQuest() {
  bq.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeByteQuest() {
  bq.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openTechHunt() {
  th.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeTechHunt() {
  th.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openVal() {
  val.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeVal() {
  val.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openVid() {
  vid.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeVid() {
  vid.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openPx() {
  px.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closePx() {
  px.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openIOT() {
  iot.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeIOT() {
  iot.style.left = "150%"
  document.body.style.overflowY = "scroll"
}

function openInspira() {
  inspira.style.left = "50%"
  document.body.style.overflowY = "hidden"
}

function closeInspira() {
  inspira.style.left = "150%"
  document.body.style.overflowY = "scroll"
}



function closeModal() {
  card.style.left = "150%"
  document.body.style.overflowY = "scroll"
}


