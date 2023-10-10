const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const backToTopBtn = document.getElementById("backToTopBtn");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

AOS.init();
