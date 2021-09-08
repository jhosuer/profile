var y = document.querySelector('#hamburger');
y.addEventListener('click', myFunction);

// function myFunction() {
//   var x = document.querySelector('#navbar');
//   if (x.style.opacity == '1') {
//     x.style.opacity = '0';
//     x.style.display = 'none';
//   } else {
//     x.style.opacity = '1';
//     x.style.display = 'block';
//   }
// }
// let menu = document.querySelector('.menu');

function myFunction() {
  let mobileNavbar = document.querySelector('#navbar');
  mobileNavbar.classList.toggle('toggle-menu');
}
