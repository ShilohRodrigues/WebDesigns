/**
 * Loading screen function
 */
const loader = document.getElementById("loader-wrapper");
window.onload = (event) => {
  loader.classList.add('loaded');
};

/** Main header functions
 * 
 *  Hiding the header on scroll down
 * 
 *  */ 
let lastScrollTop = 0;
const header = document.getElementById("headerContainer");
const headerStyles = window.getComputedStyle(header);
const banner = document.getElementById("banner");

document.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > lastScrollTop) {  // User is scrolling down
    if (currentScrollTop - lastScrollTop < 90) return; //Only hide the header after a minimum scroll down
    header.style.top = `-${headerStyles.getPropertyValue("height")}`; // Adjust the value based on the height of your header
    // Change the background of the header once scrolled down...
    // Wait half a second to allow the header to hide first
    if (lastScrollTop == 0)  {
      setTimeout(() => {header.classList.add('header-background')}, 300)
    }
    if (mobileNavOpen) openMobileNav(); //Close mobile nav
  } 
  else {   // User is scrolling up
    if (currentScrollTop == 0) header.classList.remove('header-background');
    else if (currentScrollTop - lastScrollTop > -200) return; //Only show the header after a minimum scroll up
    header.style.top = "0"; 
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

// Get all the header items in the main header
const desktopHeader = document.getElementById("desktopNav");
const headerItems = desktopHeader.getElementsByClassName("header-item");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < headerItems.length; i++) {
  headerItems[i].addEventListener("click", function() {
    const actives = document.getElementsByClassName("active-header");
    for (let j = 0; j < actives.length; j++) {
      console.log(actives[j]);
      actives[j].classList.remove("active-header");
    }
    this.className += " active-header";
  });
}


/** Mobile nav
 * 
 *  Showing and hiding the mobile hamburger menu
 * 
 *  */ 
let mobileNavOpen = false;
const openMenu = document.getElementById("hamburgerMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileNav = document.getElementById("mobileNav");

const mobileNavStyles = window.getComputedStyle(mobileNav);

openMenu.addEventListener("click", openMobileNav); 
function openMobileNav() {
  mobileNav.classList.add('open-nav');
  mobileNavOpen = true;
}
closeMenu.addEventListener("click", closeMobileNav); 
function closeMobileNav() {
  mobileNav.classList.remove('open-nav');
  mobileNavOpen = false;
}

// Get all the header items in the mobile header
const mobileHeaderItems = mobileNav.getElementsByClassName("header-item");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < mobileHeaderItems.length; i++) {
  mobileHeaderItems[i].addEventListener("click", function() {
    const actives = document.getElementsByClassName("active-mobile-header");
    for (let j = 0; j < actives.length; j++) {
      console.log(actives[j]);
      actives[j].classList.remove("active-mobile-header");
    }
    this.className += " active-mobile-header";
  });
}

//Close the mobile nav if the window is resized 
window.addEventListener("resize", () => {
  if (mobileNavOpen) closeMobileNav();
});

/** Animations
 *  
 *  Animates sections to slide in or fade in
 * 
 */
const slideInLeftElements = document.getElementsByClassName('slide-in-left');
const slideInUpElements = document.getElementsByClassName('slide-in-up');
const fadeInElements = document.getElementsByClassName('fade-in');

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

animate();
function animate() {

  //For slide in animated elements
  for (let i = 0; i < slideInLeftElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInLeftElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInLeftElements[i].classList.add("slide-in-animate");
    }
  }
  for (let i = 0; i < slideInUpElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInUpElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInUpElements[i].classList.add("slide-in-animate");
    }
  }
  //For fade in animated elements
  for (let i = 0; i < fadeInElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeInElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      fadeInElements[i].classList.add("fade-in-animate");
    }
  }

}

/**
 * 
 * Functionality for the accordion section
 * 
 */
const accordions = document.getElementsByClassName('accordion');
let openAccordion = accordions[0];
openAccordion.classList.toggle("open-accordion");

for (let i=0; i < accordions.length; i++) {

  accordions[i].addEventListener('click', function() {
    if (openAccordion == null) {
      openAccordion = this;
    }
    else if (this != openAccordion) {
      openAccordion.classList.toggle("open-accordion");
      openAccordion = this;
    }   
    else {
      openAccordion = null;
    }
    this.classList.toggle("open-accordion");   
  })

}