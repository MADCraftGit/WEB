console.log('Script loaded');


window.addEventListener("scroll", function() {
  let arrow = document.querySelector(".top-arrow");
  
  if (window.scrollY > 0) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});