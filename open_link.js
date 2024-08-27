document.querySelectorAll('.links-container img').forEach(img => {
	img.addEventListener('click', () => {
		const url = img.getAttribute('data-url');
		window.open(url, '_blank');
	});
});