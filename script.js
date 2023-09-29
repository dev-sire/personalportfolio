let hamburger = document.querySelector('.hamburger');
let navBar = document.querySelector('.right');
let stickyNav = document.getElementById('navigation');
var lastScrollTop = 0;
let menuOpen = false;
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        stickyNav.style.top = "-80px";
    }else{
        stickyNav.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
var typed = new Typed('#element', {
    strings: ['Software Engineer', 'Data Scientist', 'Web Developer'],
    typeSpeed: 50,
    loop: true,
    backDelay: 2000,
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,

    },
    loop: true,
});
hamburger.addEventListener('click', ()=>{
    if(!menuOpen){
        hamburger.classList.add('open');
        navBar.classList.add("active");
        menuOpen = true;
    }
    else{
        hamburger.classList.remove('open');
        navBar.classList.remove('active');
        menuOpen = false;
    }

});

openModalButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})
overlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.opened')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})
closeModalButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})
function openModal(modal){
    if(modal == null) return
    modal.classList.add('opened')
    overlay.classList.add('opened')
}
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('opened')
    overlay.classList.remove('opened')
}
