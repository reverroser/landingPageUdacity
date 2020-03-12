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
 * Define Global constiables
 * 
*/
const pageSections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global constiables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const buildNavbar = () => {
    for (let section of pageSections) {
        const navItem = document.createElement('li');
        const navItemLink = document.createElement('a');
        const navLabel = section.dataset.nav;
        navItemLink.className = 'menu__link';
        navItemLink.innerHTML = navLabel;
        navItemLink.addEventListener('click', () => scrollToAnchor(section.id));
        navItem.appendChild(navItemLink);
        navbarList.appendChild(navItem);
    }
};

// Add class 'active' to section when near top of viewport
const setActiveSectionOnScroll = () => {
    for (let section of pageSections) {
        const { top } = section.getBoundingClientRect();
        const offset = section.offsetHeight;
        /**
         * If the element is 100px offset from the top and 100 offset from the bottom
         * set the class active to the section element, otherwise remove it.
         */
        if (top < 100 && top >= -Math.abs(offset - 100)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(id) {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNavbar();

// Set sections as active
window.addEventListener('scroll', setActiveSectionOnScroll);

// Remove event listeners
window.onbeforeunload = () => {
    window.removeEventListener('scroll', setActiveSectionOnScroll);
};
