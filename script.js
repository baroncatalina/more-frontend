window.addEventListener('mousemove', (event) => {
    const imageSet = document.querySelector('.image-set');
    const mouseX = event.clientX; // Get mouse X position

    // Calculate offset based on mouse position relative to window
    const offset = mouseX / window.innerWidth; // 0 to 1

    // Adjust for potential imageSet width exceeding window width
    const imageSetWidth = imageSet.offsetWidth;
    const maxOffset = imageSetWidth - window.innerWidth;

    // Clamp offset between 0 and maxOffset
    const clampedOffset = Math.min(Math.max(offset, 0), maxOffset);

    // Apply translation based on clamped offset
    const newPosition = -clampedOffset * window.innerWidth + 'px';
    imageSet.style.transform = `translateX(${newPosition})`;
});

const images = document.querySelectorAll('.images');
const popUpBox = document.querySelector('.popup-box');


// for (i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', console.log('hello'))
// };
