$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    Infinity: false,
    speed: 300,
    rtl: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<button class="slick-prev"><img src="assets/icons/green-arrow.svg"></button>',
    prevArrow: '<button class="slick-next"><img src="assets/icons/arrow-left-s-line.svg"></button>',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
    ]
  });





  $num = $('.ui-card').length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $('.ui-card:nth-child(' + $even + ')').addClass('active');
    $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.ui-card:nth-child(' + $odd + ')').addClass('active');
    $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
  }

  $('.ui-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
      // $('.container').fadeOut(500)
      $('.container').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.container').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
  });


  // Keyboard nav
  $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
      $('.active').next().trigger('click');
    }
  });
});






const carousel = document.querySelector(".custom-carousel");
const carousels = document.getElementsByClassName("custom-carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const itemWidth = carousel.clientWidth / 3;

console.log(carousels);
console.log(carousels.length);
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > carousels.length - 3) {
    currentIndex = 0;
  }
  updateCarousel();

  console.log(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carousels.length - 3;
  }
  updateCarousel();

  console.log(currentIndex);
});

// function updateCarousel() {
//   const translateX = -currentIndex * itemWidth;
//   carousel.style.transform = `translateX(${translateX}px)`;
// }

function updateCarousel() {
  const translateX = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${translateX}px)`;

  // Remove the "middle" class from all items
  const items = document.querySelectorAll(".custom-carousel-item");
  items.forEach((item) => item.classList.remove("middle"));

  // Add the "middle" class to the middle item
  items[currentIndex + 1].classList.add("middle");
}

updateCarousel();
