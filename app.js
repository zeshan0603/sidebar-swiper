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
function show() {
  document.getElementById("mySidebar").style.width = "30%";
  document.getElementById("mySidebar").style.paddingLeft = "25px";
  document.getElementById("mySidebar").style.paddingRight = "25px";
  document.getElementById("content").style.marginLeft = "32%";
}

function hide() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.paddingLeft = "0";
  document.getElementById("mySidebar").style.paddingRight = "0";
  document.getElementById("content").style.marginLeft = "0";
}