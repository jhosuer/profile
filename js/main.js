// var y = document.querySelector('#hamburger');
var y = document.querySelector('#img');
// y.addEventListener('click', myFunction);
y.addEventListener('click', foo);

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


// document.getElementById("img").onclick = foo;

  function foo() {
      let x = document.querySelectorAll('.linksonly ul li');
      for (i = 0; i < x.length; i++) {
        if (x[i].style.display != "flex"){
          x[i].style.display = "flex";  
        } else {
          x[i].style.display = "none";
        }
        
        // x[i].classList.toggle('toggle-menu');
      }

    // if (list.style.display == "none") {
    //    list.style.display = "block";
    // } else {
    //    list.style.display = "none";
    // }
    // alert('hey');
  
}

// function foo() {
//   let mobileNavbar = document.querySelector('#two');
//   mobileNavbar.classList.toggle('toggle-menu');
// }

// function myFunction() {
//   let mobileNavbar = document.querySelector('#navbar');
//   mobileNavbar.classList.toggle('toggle-menu');
// }


ScrollOut({
  onShown: function(el) {
    // use the web animation API
    el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  },
  onHidden: function(el) {
    // hide the element initially
    el.style.opacity = 0;
  }
});


// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// });


// function PageTransition() {
//   var tl = gsap.timeline();
//   tl.to('ul.transition li', {durarion: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
//   tl.to('ul.transition li', {durarion: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1})
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
//   tl.from('.left', {duration: 1.5, translateY: 50, opacity: 0})
//   tl.to('img', {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise(done => {
//     SetTimeout(() => {
//       done();
//     }, n);
//   });
// }

//   barba.init({
//       sync: true,

//       transitions: [{

//         async leave(data) {
//           const done = this.async();

//           PageTransition();
//           await Delay(1500);
//           done();
//         }
//         async enter(data) {
//           contentAnimation();

//         },
//         async once(data) {
//           contentAnimation();
//         }
//       }]
//   });