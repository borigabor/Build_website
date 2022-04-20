let searchForm = document.querySelector('.search-form');

let accountForm = document.querySelector('.account-form');

let contact = document.querySelector('.contact-info');

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   accountForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   accountForm.classList.remove('active');
};

document.querySelector('#account-btn').onclick = () => {
   accountForm.classList.toggle('active');
   searchForm.classList.remove('active');
}

document.querySelector('#info-btn').onclick = () => {
   contact.classList.add('active');
}

document.querySelector('#close-info').onclick = () =>{
   contact.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});