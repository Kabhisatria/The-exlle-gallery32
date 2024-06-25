


function atHome() {
    
    if (document.getElementById('featuring')) return true;
    return false;
}


function navSlide() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    navLinks.forEach((link, index)=> {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else    
        link.style.animation = `navLinkFade 0.2s ease forwards ${index/5+ 0.2}s`;
    });
}


function clickBurger() {burger.addEventListener('click', navSlide)}





function onActive() {
    if (atHome()) {
        const navbarElement = document.getElementById('about-link');
        const aboutSection = document.getElementById('abt-me');
        const viewportPosition = aboutSection.getBoundingClientRect().top;
        
        if (viewportPosition <= 180) navbarElement.classList.add('nav-active');
        else navbarElement.classList.remove('nav-active');
    }
}



function activeGalleryContact() {
    const navLinkElements = document.querySelectorAll('.nav__link');
    const windowPathname = window.location.pathname;
    
    navLinkElements.forEach(navLinkE => {
        if ((windowPathname !== "/") && navLinkE.href.includes(windowPathname)) {
            navLinkE.classList.add('nav-active');
        } else navLinkE.classList.remove('nav-active');
    });    
}


function goHome() {
    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', ()=> {
                if (burger.classList.contains('toggle')) navSlide();
                if (atHome()) {
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            });
        }
        
        else {
            window.location.href = 'index.html';
        }
    });
}


function scrollToAbout() {
    
    const section = document.getElementById('abt-me');
    section.scrollIntoView({behavior: 'smooth'});
}


function goAbout() {
    const aboutLink = document.getElementById('about-link');
  
    aboutLink.addEventListener('click', () => {
                if (burger.classList.contains('toggle')) navSlide();
        
        if (!document.getElementById('featuring')) {
            window.location.href = 'index.html#abt-me'; 
        }
        else scrollToAbout();
    });
}

function activeAbout() {
    window.addEventListener('scroll', ()=> {
        onActive();
    });
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

activeGalleryContact();
clickBurger();
activeAbout();
goHome();
goAbout();