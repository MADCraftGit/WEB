console.log('Script loaded');


document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.style.color = 'rebeccapurple';
    
    setTimeout(() => {
      window.location.href = this.href;
    }, 225);
  });
});

window.addEventListener("scroll", function() {
  let arrow = document.querySelector(".top-arrow");
  
  if (window.scrollY > 0) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});