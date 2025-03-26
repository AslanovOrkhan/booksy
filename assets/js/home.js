// toggle menu
const user = document.querySelector(".user");
const loginContainer = document.querySelector(".login-container");

user.addEventListener("click", () => {
  loginContainer.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1400: {
      slidesPerView: 8,
    },
    768: {
      slidesPerView: 6,
    },
    576: {
      slidesPerView: 5,
    },
    450: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".promotional-slider", {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});
var swiper = new Swiper(".popular-slider", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,

  breakpoints: {
    991: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 5,
    },
    576: {
      slidesPerView: 4,
    },
    360: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".restaurant-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-custom-prev",
    prevEl: ".swiper-button-custom-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    450: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
  on: {
    slideChange: function () {
      const nextButton = document.querySelector(".swiper-button-custom-next");
      const prevButton = document.querySelector(".swiper-button-custom-prev");

      if (this.isEnd) {
        prevButton.classList.add("swiper-button-custom-disabled");
      } else {
        prevButton.classList.remove("swiper-button-custom-disabled");
      }

      if (this.isBeginning) {
        nextButton.classList.add("swiper-button-custom-disabled");
      } else {
        nextButton.classList.remove("swiper-button-custom-disabled");
      }
    },
  },
});

// footer accordion
const servicesTitle = document.querySelectorAll(".services-title");
const servicesContainer = document.querySelectorAll(".services-container");

servicesTitle.forEach((title, index) => {
  title.addEventListener("click", function () {
    servicesContainer[index].classList.toggle("active");
  });
});
