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

function carouselCreator() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";

  carousel.append(leftButton, img1, img2, img3, img4, rightButton);

  //Add carousel functionality
  let images = [img1, img2, img3, img4];
  let currentImageIndex = 0;
  displayCarouselImage(images[currentImageIndex]); //sets initial img for carousel

  rightButton.addEventListener('click', e => {
    if (currentImageIndex < 3) {
      currentImageIndex++;
      displayCarouselImage(images[currentImageIndex], images[currentImageIndex - 1]);
    } else {
      currentImageIndex = 0;
      displayCarouselImage(images[currentImageIndex], images[images.length - 1]);
    }
  });

  leftButton.addEventListener('click', e => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      displayCarouselImage(images[currentImageIndex], images[currentImageIndex + 1]);
    } else {
      currentImageIndex = 3;
      displayCarouselImage(images[currentImageIndex], images[0]);
    }
  });

  document.querySelector('.carousel-container').appendChild(carousel);
}

carouselCreator();

function displayCarouselImage(img, oldImg) {
  img.style.display = 'inline-block';
  if (oldImg) {
    oldImg.style.display = 'none';
  }
}