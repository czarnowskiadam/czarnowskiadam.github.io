// document.addEventListener("DOMContentLoaded", function() {
  // const slider = document.querySelector('.slider');
  // const tiles = document.querySelectorAll('.tile');

  // tiles.forEach(tile => {
    // const clone = tile.cloneNode(true);
    // slider.appendChild(clone);
  // });

  // let scrollSpeed = 0.5; // Adjust the speed as needed
  // let currentPosition = 0;
  
  // function startScroll() {
    // const tileWidth = tiles[0].offsetWidth + 20; // Width of a tile plus margin
    // const sliderWidth = tileWidth * tiles.length; // Total width of the slider

    // function slide() {
      // currentPosition -= scrollSpeed;
      // if (Math.abs(currentPosition) >= sliderWidth) {
        // currentPosition = 0;
      // }
      // slider.style.transform = `translateX(${currentPosition}px)`;
      // requestAnimationFrame(slide);
    // }

    // requestAnimationFrame(slide);
  // }

  // slider.addEventListener('mouseover', () => {
    // scrollSpeed = 0;
  // });

  // slider.addEventListener('mouseout', () => {
    // scrollSpeed = 0.5; // Resume scrolling at the default speed
  // });

  // startScroll();

  // const allTiles = document.querySelectorAll('.tile');
  // allTiles.forEach(tile => {
    // tile.addEventListener('click', () => {
      // const url = tile.getAttribute('data-url');
      // window.open(url, '_blank');
    // });
  // });
// });

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const tiles = document.querySelectorAll('.tile');

  // Clone the tiles for seamless scrolling
  const tileArray = Array.from(tiles);
  tileArray.forEach(tile => {
    const clone = tile.cloneNode(true);
    slider.appendChild(clone);
  });

  let scrollSpeed = 0.5; // Speed of scrolling
  let currentPosition = 0;
  const tileWidth = tiles[0].offsetWidth + parseInt(window.getComputedStyle(tiles[0]).marginRight, 10);
  const totalWidth = tileWidth * tileArray.length; // Total width including original and cloned tiles

  function startScroll() {
    function slide() {
      currentPosition -= scrollSpeed;

      // Reset position for seamless loop
      if (Math.abs(currentPosition) >= totalWidth) {
        currentPosition = 0;
      }

      slider.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(slide);
    }

    requestAnimationFrame(slide);
  }

  // Pause scrolling on mouseover
  slider.addEventListener('mouseover', () => {
    scrollSpeed = 0;
  });

  // Resume scrolling on mouseout
  slider.addEventListener('mouseout', () => {
    scrollSpeed = 0.5; // Resume scrolling at the default speed
  });

  // Start scrolling animation
  startScroll();

  // Open website on tile click
  tileArray.forEach(tile => {
    tile.addEventListener('click', () => {
      const url = tile.getAttribute('data-url');
      window.open(url, '_blank');
    });
  });
});


