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
	
	var fullPath = window.location.pathname;
	var fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
	
	const resumeTitle = document.querySelector('#resumeTitle')
	
	function changeName(filename, enName, plName) {
		if (filename === "polish.html") {
			resumeTitle.textContent = plName;
		} else {
			resumeTitle.textContent = enName;	
		}
	}

	changeName(fileName, 'EDUCATION', 'EDUKACJA');

    function switchView(viewToShow) {        
        switchEducation.style.display = 'none';
        switchExperience.style.display = 'none';
        switchLanguages.style.display = 'none';
        switchSkills.style.display = 'none';
		switchHobbies.style.display = 'none';
        
        viewToShow.style.display = 'block';
    }
    
    educationButton.addEventListener('click', function() {  
		changeName(fileName, 'EDUCATION', 'EDUKACJA');	
        switchView(switchEducation);
    });

    experienceButton.addEventListener('click', function() {  
		changeName(fileName, 'EXPERIENCE', 'DOŚWIADCZENIE');      
        switchView(switchExperience);
    });
	
	languagesButton.addEventListener('click', function() {  
		changeName(fileName, 'LANGUAGES', 'JĘZYKI'); 
        switchView(switchLanguages);
    });
	
	skillsButton.addEventListener('click', function() {  
		changeName(fileName, 'SKILLS', 'UMIEJĘTNOŚCI');      
        switchView(switchSkills);
    });
	
	hobbiesButton.addEventListener('click', function() { 
		changeName(fileName, 'HOBBIES', 'HOBBY');	       
        switchView(switchHobbies);
    });
});
