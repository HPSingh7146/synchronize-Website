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
  card.classList.add('fixed');
  card.classList.remove('hidden');
}

function openAgora() {
  agora.classList.add('fixed');
  agora.classList.remove('hidden')
}

function closeAgora() {
  agora.classList.add('hidden');
  agora.classList.remove('fixed')
}

function openCodeVerse() {
  cV.classList.add('fixed')
  cV.classList.remove('hidden')

}

function closeCodeVerse() {
  cV.classList.add('hidden')
  cV.classList.remove('fixed')
}

function openSynergia() {
  syn.classList.add('fixed')
  syn.classList.remove('hidden')
}

function closeSynergia() {
  syn.classList.add('hidden')
  syn.classList.remove('fixed')
}

function openWeblynx() {
  weblynx.classList.add('fixed')
  weblynx.classList.remove('hidden')

}

function closeWeblynx() {
  weblynx.classList.add('hidden')
  weblynx.classList.remove('fixed')
}

function openByteQuest() {
  bq.classList.add('fixed')
  bq.classList.remove('hidden')
}

function closeByteQuest() {
  bq.classList.add('hidden')
  bq.classList.remove('fixed')
}

function openTechHunt() {
  th.classList.add('fixed')
  th.classList.remove('hidden')
}

function closeTechHunt() {
  th.classList.add('hidden')
  th.classList.remove('fixed')
}

function openVal() {
  val.classList.add('fixed')
  val.classList.remove('hidden')
}

function closeVal() {
  val.classList.add('hidden')
  val.classList.remove('fixed')
}

function openVid() {
  vid.classList.add('fixed')
  vid.classList.remove('hidden')
}

function closeVid() {
  vid.classList.add('hidden')
  vid.classList.remove('fixed')
}

function openPx() {
  px.classList.add('fixed')
  px.classList.remove('hidden')
}

function closePx() {
  px.classList.add('hidden')
  px.classList.remove('fixed')
}

function openIOT() {
  iot.classList.add('fixed')
  iot.classList.remove('hidden')
}

function closeIOT() {
  iot.classList.add('hidden')
  iot.classList.remove('fixed')
}

function openInspira() {
  inspira.classList.add('fixed')
  inspira.classList.remove('hidden')
}

function closeInspira() {
  inspira.classList.add('hidden')
  inspira.classList.remove('fixed')
}



function closeModal() {
  card.classList.remove('fixed');
  card.classList.add('hidden');
}


