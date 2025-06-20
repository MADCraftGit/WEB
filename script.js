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