//  Slide Menu  Animation
document.querySelector("a.burger-menu").addEventListener("click", slideMenu);

function slideMenu() {
  var element = document.querySelector(".hide");
  element.classList.toggle("show");
}

// Slide Image Animation

var slideIndex = 1;

var myTimer;

var slideshowContainer;

var pause;
var resume;

window.addEventListener("load", function() {
  showSlides(slideIndex);
  myTimer = setInterval(function() {
    plusSlides(1);
  }, 4000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName(
  //  "slideshow-container"
  // )[0];

  slideshowContainer.addEventListener("mouseenter", pause);
  slideshowContainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL

document.querySelector("a.prev").addEventListener("click", plusSlides);
document.querySelector("a.next").addEventListener("click", plusSlides);

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function() {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function() {
      plusSlides(n + 1);
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  */
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += ' active';
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(slideIndex);
  }, 4000);
};

// Testimonials Slider

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = testimonialsContainer.querySelector(".testimonial");
const logo = testimonialsContainer.querySelector(".testimonials-logo");
const username = testimonialsContainer.querySelector(".username");
const role = testimonialsContainer.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis a lectus at placerat. Morbi placerat hendrerit nunc non hendrerit. Fusce gravida ante in dui finibus tristique. Nullam sit amet efficitur metus, eu rhoncus nisl. In hac habitasse platea dictumst. Sed non elit tincidunt."
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Cras vel venenatis nulla, sed porttitor nisi. Etiam et mi sapien. Quisque sed orci dapibus, ullamcorper tellus vel, faucibus quam. Sed urna leo, eleifend eu purus a, rhoncus tempor velit. Vivamus non maximus nunc. Sed luctus fringilla eros condimentum hendrerit. Suspendisse id vestibulum est!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Vestibulum volutpat elit vel lectus bibendum, iaculis lobortis turpis lobortis. Vivamus luctus est eget imperdiet dictum. Vestibulum ut augue vehicula, feugiat nibh sit amet, sollicitudin orci. Quisque a arcu ligula. Vestibulum ac ultrices tellus. Sed pellentesque mauris et ex pharetra, a cursus ligula egestas."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Nullam a lorem eget velit posuere suscipit. In fringilla eget leo vitae efficitur. Nulla pretium vehicula lorem. Cras feugiat sem in suscipit laoreet. Sed at lacus eu est tincidunt dictum at eu ex. Proin placerat condimentum risus id eleifend. Nunc euismod lorem ut quam blandit, sed eleifend ipsum tincidunt."
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "Donec convallis justo vel vehicula varius. Suspendisse eu rhoncus nunc. Curabitur suscipit non sapien id molestie. Donec a massa enim. Donec interdum sapien mollis leo aliquam, sed pharetra lorem tristique. Quisque dapibus maximus turpis ac ultricies. In auctor tempus laoreet. Donec in tortor eu. "
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "Quisque lorem purus, dictum a feugiat a, gravida quis ante. Nulla semper magna at lobortis lobortis. Maecenas aliquam volutpat ullamcorper. Nullam facilisis orci sem, in elementum mauris ultricies sit amet. Curabitur nulla nibh, vehicula vel eros porta, elementum aliquet massa."
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "Integer suscipit leo ac sem aliquet vestibulum. Fusce venenatis neque lorem. Aliquam pharetra aliquet odio nec viverra. Vivamus facilisis, nibh ut consectetur lacinia, elit lectus sollicitudin mi, sed euismod sem augue ac sem. Morbi quis leo ante. Nunc metus odio, rhoncus ut leo at, tincidunt rutrum nisl."
  }
];
let idx = 1;

function updateTestimonial() {
  let { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  logo.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

// SmoothScroll Script
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800
});
