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

// datapicker

$(function() {
  $('input[name="start"]').daterangepicker({
    "locale": {
      "format": "MM/DD/YYYY",
      "separator": " - ",
      "applyLabel": "اجرا",
      "cancelLabel": "کنسل",
      "fromLabel": "از",
      "toLabel": "تا",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
      ],
      "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      "firstDay": 1
  },
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  },);
});