const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle')

// if someone  clicks the hamburger  menu
navToggle.addEventListener('click', ()=> {
    const visibility = nav.getAttribute('data-visible');
    
    if(visibility === 'false') {
        nav.setAttribute('data-visible','true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        nav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
})


