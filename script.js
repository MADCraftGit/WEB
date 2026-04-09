console.log('Script loaded');


window.addEventListener("scroll", function() {
  let arrow = document.querySelector(".top-arrow");
  
  if (window.scrollY > 0) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});

const rules = document.getElementById("rulesID");
const btn = document.getElementById("openRules");

btn.onclick = function(e) {
  e.preventDefault();
  rules.classList.add("active");
}

window.onclick = function(e) {
  if (e.target == rules) {
    rules.classList.remove("active");
  }
}