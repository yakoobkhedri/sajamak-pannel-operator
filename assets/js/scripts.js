// sidebar
let toggleSidebar=document.getElementById('toggle-sidebar');
let openSidebar=document.getElementById('openSidebar');
let overlay=document.getElementById('overlay');

toggleSidebar.addEventListener('click',function () {
  toggleSidebar.parentElement.parentElement.parentElement.classList.toggle('close');
  overlay.classList.remove('active');
})

openSidebar.addEventListener('click',function () {
  openSidebar.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('close');
  overlay.classList.add('active');
})

// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.right', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});