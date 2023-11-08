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

// data table

// let table = new DataTable('#myTable');
$(document).ready( function () {
  $('#myTable').DataTable({
    paging: false
  });
  $('#myTable2').DataTable({
    paging: false
  });
} );

// datapicker

jalaliDatepicker.startWatch();