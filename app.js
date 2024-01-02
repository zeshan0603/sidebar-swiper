var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  speed: 700,
  autoplay: {
    delay: 1500,
    stopOnLastSlide : false,
    disableOnInteraction	:true,
    pauseOnMouseEnter : true
  },
  loop: true
});

const sideBar = document.getElementById("mySidebar");
const community = document.getElementById("content");
const openBtn = document.getElementById("openbtn");
function show() {
  sideBar.classList.toggle("closed");
  community.classList.toggle("active");
  openBtn.style.opacity = "0";
}

function hide() {
  sideBar.classList.toggle("closed");
  community.classList.toggle("active");
  openBtn.style.opacity = "1";

}