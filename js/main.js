// ---------------------mobile menu

let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.header__menu-mobile');
let menuLinks = document.querySelectorAll('.header__menu-link');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMenu();
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
function closeMenu() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('lock');
}

window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ----------------------end mobile menu

// ----- video settings -----

document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach((container, index) => {
        const video = container.querySelector('.video-frame');
        const playButton = container.querySelector('.play-button');

        const togglePlayPause = () => {
            if (video.paused || video.ended) {
                video.setAttribute('controls', 'controls');
                video.play();
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'flex';
            }
        };

        const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobileDevice) {
            video.addEventListener('click', () => {
                if (!video.paused) {
                    video.pause();
                    playButton.style.display = 'flex';
                }
            });
        }

        playButton.addEventListener('click', togglePlayPause);

        video.addEventListener('play', function() {
            playButton.style.display = 'none';
        });

        video.addEventListener('pause', function() {
            playButton.style.display = 'flex';
        });

        video.addEventListener('ended', function() {
            playButton.style.display = 'flex';
            video.removeAttribute('controls');
        });
    });
});

// ----- SPLIDE SLIDER -----

const splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    pagination: false,
    perMove: 3,
    gap: '17px',
    breakpoints: {
        1200: { perPage: 2 },
        768 : { perPage: 1},
        320 : { perPage: 1, fixedWidth: "280px" },
    },
} ) .mount();

// ----- ACCORDION -----

const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.accordion-body')
    body.classList.toggle('active')
  })
})

// ----- POPUP -----
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        popupBg.classList.add('active');
        popup.classList.add('active');
        document.body.classList.add('lock');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.body.classList.remove('lock');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        document.body.classList.remove('lock');
    }
});