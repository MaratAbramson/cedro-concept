/* Owl-carousel init */
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    pagination: false,
    nav: false,
    margin: 32,
    autoHeight: false,
    stagePaddingLeft: 50,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1.5
      },
      576: {
        items: 2
      },
      768: {
        items: 2.5
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
});


/* Burger menu */
let menuButton = document.querySelector(".js-menuTrigger");
let menuContent = document.querySelector(".js-menu");
let scrollArea = document.querySelector(".js-scrollArea");

let showMenu = () => {
  menuButton.classList.toggle("active");
  menuContent.classList.toggle("active");
  scrollArea.classList.toggle("active");
  menuContent.focus()
}

menuButton.addEventListener("click", showMenu);


/* Show value in input type="password" */
let passwordToggler = document.querySelector(".js-password-toggler");
let passwordInput = document.querySelector("#userOldPassword");

let showPassword = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text"
  } else {
    passwordInput.type = "password"
  };
  passwordToggler.classList.toggle("active");
}

passwordToggler.addEventListener("click", showPassword);


/* Like check */
let likedButtonsList = document.querySelectorAll(".js-likedButton");

likedButtonsList.forEach(function(likedButton) {
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("active");
  });
});

