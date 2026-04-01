console.log('Script loaded');

fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

window.addEventListener("scroll", function() {
  let arrow = document.querySelector(".top-arrow");
  
  if (window.scrollY > 0) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});