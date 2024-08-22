document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('#homeButton');
    const resumeButton = document.querySelector('#resumeButton');
    const projectsButton = document.querySelector('#projectsButton');
    const contactButton = document.querySelector('#contactButton');


    const switchHome = document.querySelector('.switch-home');
    const switchResume = document.querySelector('.switch-resume');
    const switchProjects = document.querySelector('.switch-projects');
    const switchContact = document.querySelector('.switch-contact');

    let currentView = switchHome;

    function switchView(viewToShow) {        
        switchHome.style.display = 'none';
        switchResume.style.display = 'none';
        switchProjects.style.display = 'none';
        switchContact.style.display = 'none';
        
        viewToShow.style.display = 'block';
        currentView = viewToShow;
    }
    
    homeButton.addEventListener('click', function() {        
        changeViewWithAnimation(switchHome, currentView, switchView);
    });

    resumeButton.addEventListener('click', function() {        
        changeViewWithAnimation(switchResume, currentView, switchView);  
    });

    projectsButton.addEventListener('click', function() {
        changeViewWithAnimation(switchProjects, currentView, switchView);  
    });

    contactButton.addEventListener('click', function() {
        changeViewWithAnimation(switchContact, currentView, switchView);  
    });
});
