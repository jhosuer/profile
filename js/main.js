var y = document.querySelector('#hamburger');
    y.addEventListener("click",myFunction);
      // function () {myFunction()};

      function myFunction () {
        var x = document.querySelector("#navbar");
         if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
            // y.style.position = "relative";
            // y.style.top = 70 + "px";
          }
        // console.log('yet');
        // alert("hey");
      }      