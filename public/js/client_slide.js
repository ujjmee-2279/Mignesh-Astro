$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// animation for slider1
var n = 5000; //set time in ms
var slide_1 = document.querySelector(".slider").querySelector(".slide-1");
var slide_2 = document.querySelector(".slider").querySelector(".slide-2");
var slide_3 = document.querySelector(".slider").querySelector(".slide-3");
var slide_4 = document.querySelector(".slider").querySelector(".slide-4");


var btn_1 = document.querySelector(".slider").querySelector(".btn-1");
var btn_2 = document.querySelector(".slider").querySelector(".btn-2");
var btn_3 = document.querySelector(".slider").querySelector(".btn-3");
var btn_4 = document.querySelector(".slider").querySelector(".btn-4");


function slide1() {
  slide_1.classList.remove("hidden");
  slide_2.classList.add("hidden");
  slide_3.classList.add("hidden");
  slide_4.classList.add("hidden");

  

  btn_1.style.background = "#E98135";
  btn_2.style.background = "#2E2C7090";
  btn_3.style.background = "#2E2C7090";
  btn_4.style.background = "#2E2C7090";


  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(repeatSlide, n);


}

function slide2() {
  slide_2.classList.remove("hidden");
  slide_1.classList.add("hidden");
  slide_3.classList.add("hidden");
  slide_4.classList.add("hidden");


  btn_2.style.background = "#E98135";
  btn_1.style.background = "#2E2C7090";
  btn_3.style.background = "#2E2C7090";
  btn_4.style.background = "#2E2C7090";


  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(repeatSlide, n);
}

function slide3() {
  slide_3.classList.remove("hidden");
  slide_1.classList.add("hidden");
  slide_2.classList.add("hidden");
  slide_4.classList.add("hidden");


  btn_3.style.background = "#E98135";
  btn_2.style.background = "#2E2C7090";
  btn_1.style.background = "#2E2C7090";
  btn_4.style.background = "#2E2C7090";


  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(repeatSlide, n);

}

function slide4() {
  slide_4.classList.remove("hidden");
  slide_1.classList.add("hidden");
  slide_2.classList.add("hidden");
  slide_3.classList.add("hidden");


  btn_4.style.background = "#E98135";
  btn_2.style.background = "#2E2C7090";
  btn_1.style.background = "#2E2C7090";
  btn_3.style.background = "#2E2C7090";


  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(repeatSlide, n);

}


let autoSlideInterval;

function repeatSlide() {
  if (!slide_1.classList.contains("hidden")) {
    slide2();
  }
  else if (!slide_2.classList.contains("hidden")) {
    slide3();
  }
  else if (!slide_3.classList.contains("hidden")) {
    slide4();
  } else {
    slide1();
  }
}
autoSlideInterval = setInterval(repeatSlide, n);


btn_1.addEventListener("click", slide1);
btn_2.addEventListener("click", slide2);
btn_3.addEventListener("click", slide3);
btn_4.addEventListener("click", slide4);






