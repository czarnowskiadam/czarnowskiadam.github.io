function updateText() {
    const flipContainers = document.querySelectorAll('.flip-container .front p');
    const currentFile = window.location.pathname;
    const fileName = currentFile.substring(currentFile.lastIndexOf('/') + 1);
    if (window.innerWidth < 1000) {
        if (fileName == 'index.html') {
            flipContainers.forEach(p => p.textContent = 'Click me!');
        }
        if (fileName == 'polish.html') {
            flipContainers.forEach(p => p.textContent = 'Kliknij na mnie!');
        }        
    } else {        
        if (fileName == 'index.html') {
            flipContainers.forEach(p => p.textContent = 'Hover over me!');
        }
        if (fileName == 'polish.html') {
            flipContainers.forEach(p => p.textContent = 'Najedź na mnie!');
        }
    }
}

// Run on page load
updateText();

// Run on window resize
window.addEventListener('resize', updateText);

