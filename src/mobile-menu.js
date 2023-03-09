export function mobileMenuEvents() {
    const hamburger = document.getElementById('hamburger-mob');
    const navMenu = document.querySelector('.nav-mobile');
    const x = document.querySelector('.close-mobile-menu');
    const content = document.querySelector('.body');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        content.classList.add('active');
    });

    x.addEventListener('click', () => {
        navMenu.classList.remove('active');
        content.classList.remove('active');
    });
}