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
    header.style.top = `-${headerStyles.getPropertyValue("height")}`; // Adjust the value based on the height of your header
    if (lastScrollTop == 0) header.classList.add('header-background'); 
    if (mobileNavOpen) openMobileNav(); //Close mobile nav
  } 
  else {   // User is scrolling up
    header.style.top = "0";
    if (currentScrollTop == 0) header.classList.remove('header-background');
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

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

//Close the mobile nav if the window is resized 
window.addEventListener("resize", () => {
  if (mobileNavOpen) closeMobileNav();
});

/** Animations
 *  
 *  Animates sections to slide in or fade in
 * 
 */
const slideInElements = document.getElementsByClassName('slide-in');
const fadeInElements = document.getElementsByClassName('fade-in');

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

animate();
function animate() {

  //For slide in animated elements
  for (let i = 0; i < slideInElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInElements[i].getBoundingClientRect().top;
    let elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInElements[i].classList.add("slide-in-animate");
    }
  }
  //For fade in animated elements
  for (let i = 0; i < fadeInElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeInElements[i].getBoundingClientRect().top;
    let elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      fadeInElements[i].classList.add("fade-in-animate");
    }
  }

}