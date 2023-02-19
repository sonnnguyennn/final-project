
/*HEADER*/
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var sticky = 170;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*CAROUSEL SLIDE*/
var cl = document.querySelector(".carousel__slide");
var slides = document.querySelectorAll(".slide")
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var counter = 1;
var width = slides[0].clientWidth;
cl.style.transform = "translateX("+ (counter* (-width)) + "px)";
console.log(width)

next.addEventListener("click", function() {
   cl.style.transition = "transform 0.4s ease-in-out";
    counter = counter + 1;
   cl.style.transform = "translateX("+ (counter* (-width)) + "px)";
})

prev.addEventListener("click", function() {
   cl.style.transition = "transform 0.4s ease-in-out";
    counter = counter - 1;
   cl.style.transform = "translateX("+ (counter* (-width)) + "px)";
})

cl.addEventListener("transitionend", function() {
   if (slides[counter].id === "first") {
   cl.style.transition = "none";
    counter = slides.length -counter;
   cl.style.transform = "translateX("+ (counter* (-width)) + "px)";
}
   if (slides[counter].id === "last") {
   cl.style.transition = "none";
    counter = slides.length - 2;
   cl.style.transform = "translateX("+ (counter* (-width)) + "px)";
}
})




/*FEEDBACK*/

var cl2 = document.querySelector(".fb__slide");
var sl = document.querySelectorAll(".slide2")

var counterr = 1;
var width2 = sl[0].clientWidth;
cl2.style.transform = "translateX("+ (counterr* (-width2)) + "px)";
console.log(width2)

setInterval(function() {
   counterr++;
   autoTransition(counterr)
},3000)

function autoTransition(counterr) {
   cl2.style.transition = "transform 0.5s ease-in-out";
   cl2.style.transform = "translateX("+ (counterr* (-width2)) + "px)";
}

cl2.addEventListener("transitionend", function() {
   console.log(sl)
   if (sl[counterr].id === "first1") {
   cl2.style.transition = "none";
     counterr = sl.length -counterr;
   cl2.style.transform = "translateX("+ (counterr* (-width2)) + "px)";
}
   if (sl[counterr].id === "last1") {
   cl2.style.transition = "none";
     counterr = sl.length - 2;
   cl2.style.transform = "translateX("+ (counterr* (-width2)) + "px)";
}
})
