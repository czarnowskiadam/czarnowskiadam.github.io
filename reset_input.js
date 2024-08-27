const form = document.getElementById('contactForm');

form.addEventListener('submit', async function (event) {
	event.preventDefault();

	const formData = new FormData(form);

	try {
		const response = await fetch(form.action, {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			form.reset();

			alert("Message sent successfully!");
		} else {
			alert("Message sending error. Try again!");
		}
	} catch (error) {
		alert("An error occurred. Please try again later.");
	}
});

function resetForm() {
	form.reset();
}

document.getElementById('homeButton').addEventListener('click', resetForm);
document.getElementById('resumeButton').addEventListener('click', resetForm);
document.getElementById('projectsButton').addEventListener('click', resetForm);
document.getElementById('contactButton').addEventListener('click', resetForm);