document.addEventListener('DOMContentLoaded', function() {
    const educationButton = document.querySelector('#educationButton');
    const experienceButton = document.querySelector('#experienceButton');
    const languagesButton = document.querySelector('#languagesButton');
    const skillsButton = document.querySelector('#skillsButton');
	const hobbiesButton = document.querySelector('#hobbiesButton');


    const switchEducation = document.querySelector('.education');
    const switchExperience = document.querySelector('.experience');
    const switchLanguages = document.querySelector('.languages');
    const switchSkills = document.querySelector('.skills');
	const switchHobbies = document.querySelector('.hobbies');
	
	// Get the full path of the current URL
	var fullPath = window.location.pathname;

	// Extract the file name from the full path
	var fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);

	console.log("Current HTML file:", fileName);
	
	const resumeTitle = document.querySelector('#resumeTitle')
	resumeTitle.textContent = 'EDUCATION';
	

    function switchView(viewToShow) {        
        switchEducation.style.display = 'none';
        switchExperience.style.display = 'none';
        switchLanguages.style.display = 'none';
        switchSkills.style.display = 'none';
		switchHobbies.style.display = 'none';
        
        viewToShow.style.display = 'block';
    }
    
    educationButton.addEventListener('click', function() {  
		resumeTitle.textContent = 'EDUCATION';	
        switchView(switchEducation);
    });

    experienceButton.addEventListener('click', function() {  
		resumeTitle.textContent = 'EXPERIENCE';      
        switchView(switchExperience);
    });
	
	languagesButton.addEventListener('click', function() {  
		resumeTitle.textContent = 'LANGUAGES';	      
        switchView(switchLanguages);
    });
	
	skillsButton.addEventListener('click', function() {  
		resumeTitle.textContent = 'SKILLS';	      
        switchView(switchSkills);
    });
	
	hobbiesButton.addEventListener('click', function() { 
		resumeTitle.textContent = 'HOBBIES';	       
        switchView(switchHobbies);
    });
});
