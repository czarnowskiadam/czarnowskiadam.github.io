document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('#homeButton');
    const resumeButton = document.querySelector('#resumeButton');
    const projectsButton = document.querySelector('#projectsButton');
    const contactButton = document.querySelector('#contactButton');


    const switchHome = document.querySelector('.switch-home');
    const switchResume = document.querySelector('.switch-resume');
    const switchProjects = document.querySelector('.switch-projects');
    const switchContact = document.querySelector('.switch-contact');


    function getViewList() {
        return [
            switchHome.style.display,
            switchResume.style.display,
            switchProjects.style.display,
            switchContact.style.display
        ];
    }

    function switchView(viewToShow) {        
        switchHome.style.display = 'none';
        switchResume.style.display = 'none';
        switchProjects.style.display = 'none';
        switchContact.style.display = 'none';
        
        viewToShow.style.display = 'block';
    }
    
    homeButton.addEventListener('click', function() {        
        switchView(switchHome);     
    });

    resumeButton.addEventListener('click', function() {        
        switchView(switchResume);   
    });

    projectsButton.addEventListener('click', function() {
        switchView(switchProjects); 
    });

    contactButton.addEventListener('click', function() {
        switchView(switchContact);  
    });
});
