function updateText() {
    const flipContainers = document.querySelectorAll('.flip-container .front p');
    if (window.innerWidth < 1000) {
        flipContainers.forEach(p => p.textContent = 'Click me!');
    } else {
        flipContainers.forEach(p => p.textContent = 'Hover over me!');
    }
}

// Run on page load
updateText();

// Run on window resize
window.addEventListener('resize', updateText);

