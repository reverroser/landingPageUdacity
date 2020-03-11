/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function buildNavbar() {
    var pageSections = document.querySelectorAll('section');
    var navbarList = document.getElementById('navbar__list');
    for (var i = 0; i < pageSections.length; i++) {
        var navItem = document.createElement('li');
        var navLabel = pageSections[i].dataset.nav;
        navItem.innerHTML = navLabel;
        navbarList.appendChild(navItem);
    }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

buildNavbar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
