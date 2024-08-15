document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector('#homeButton');
    const resumeButton = document.querySelector('#resumeButton');
    const projectsButton = document.querySelector('#projectsButton');
    const contactButton = document.querySelector('#contactButton');

    const languageButton = document.querySelector('#languageButton');

    const switchHome = document.querySelector('.switch-home');
    const switchResume = document.querySelector('.switch-resume');
    const switchProjects = document.querySelector('.switch-projects');
    const switchContact = document.querySelector('.switch-contact');


    function getViewList() {
        return [
            switchHome.style.visibility,
            switchResume.style.visibility,
            switchProjects.style.visibility,
            switchContact.style.visibility
        ];
    }

    function switchView(viewToShow) {        
        switchHome.style.visibility = 'hidden';
        switchResume.style.visibility = 'hidden';
        switchProjects.style.visibility = 'hidden';
        switchContact.style.visibility = 'hidden';
        
        viewToShow.style.visibility = 'visible';
    }
    
    homeButton.addEventListener('click', function() {        
        switchView(switchHome);     
        console.log(getViewList());
    });

    resumeButton.addEventListener('click', function() {        
        switchView(switchResume);   
        console.log(getViewList()); 
    });

    projectsButton.addEventListener('click', function() {
        switchView(switchProjects); 
        console.log(getViewList()); 
    });

    contactButton.addEventListener('click', function() {
        switchView(switchContact);  
        console.log(getViewList()); 
    });

    languageButton.addEventListener('click', function() {
        const currentFile = window.location.pathname;
        const fileName = currentFile.substring(currentFile.lastIndexOf('/') + 1);
        console.log(currentFile);
        console.log(fileName);
        
        if (fileName == 'index.html') {
            window.location.href = 'polish.html';
        }
        if (fileName == 'polish.html') {
            window.location.href = 'index.html';
        }
    });
});
