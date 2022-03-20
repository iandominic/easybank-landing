function scrollHeader(){
    const header = document.getElementById('header')
    const navBar = document.querySelector('.nav')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header'); 
        header.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
        navBar.style.transition = ".3s ease";
    }
    else {
        header.classList.remove('scroll-header');
        header.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0)";
    }
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Scroll Reveal

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__bg`,{delay: 200})
sr.reveal(`.home__title`,{delay: 200})
sr.reveal(`.home__subtitle`,{delay: 300})
sr.reveal(`.home__btn`,{delay: 400})

sr.reveal(`.about__title`,{origin: 'left', interval: 50})
sr.reveal(`.about__subtitle`,{origin: 'right', interval: 50})
sr.reveal(`.offer__logo`,{delay: 100})
sr.reveal(`.offer__title`,{delay: 200})
sr.reveal(`.offer__desc`,{delay: 300})

sr.reveal(`.blogs__title`,{delay: 100})
sr.reveal(`.card`,{delay: 100})
sr.reveal(`.card__image`,{delay: 200})
sr.reveal(`.card__data`,{delay: 300})

sr.reveal(`.footer__container`,{origin: 'top', interval: 50})

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
