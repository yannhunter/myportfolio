const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
});
iconClose.addEventListener('click',()=>{
    navbarMenu.classList.remove('active');
});
menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click',()=>{
        navbarMenu.classList.remove('active');
    });
})


// change backgroung header
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll',scrollHeader);

// Hero typed effect 
const typed = document.querySelector('.typed');
if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed ('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Scroll section active link
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY =window.scrollY;
    sections.forEach(section=>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        let sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active_link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active_link');
        }
        
    })
}
window.addEventListener('scroll',scrollActive);

// resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelectorAll('.resume');
function resumeActive(){
    const scrollY = window.scrollY;
    pages.forEach(page =>{
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 120;
        let sectionId = page.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
} 
window.addEventListener('scroll',resumeActive);

// Portfolio

let filterItems = document.querySelectorAll('.portfolio_filters li');
function activePortfolio(){
    filterItems.forEach(e1 =>{
        e1.classList.remove('filter_active');
        this.classList.add('filter_active');
    })
}

filterItems.forEach(e1 => {
    e1.addEventListener('click', activePortfolio);
})
// Mixitup filter portfolio

let mixerPortfolio = mixitup('.portfolio_wrap-container',{
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration:300
    }
})

// Testimonial swiper 

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   Services
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll('.services_modal'),
    modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=> {modal(i)})
})
modalClose.forEach(e1 => {
    e1.addEventListener('click',() => {
        modalViews.forEach(modalView => {modalView.classList.remove('active-modal')})
    })
})


