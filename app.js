var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });}

  
 

  var list = document.querySelector(".menu");
  var burger = document.querySelector(".burger")

  burger.addEventListener("click", () => {
    list.classList.toggle("navposition");
    burger.classList.toggle("toogle")
    
  })
  var vid = document.getElementById("myVideo"); 

  function playVid() { 
    vid.play(); 
  } 
  
  function pauseVid() { 
    vid.pause(); 
  } 








 