$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

var modal = document.getElementById('myModal');
var img = document.getElementById('photos');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

var slideIndex = 1;
//showSlides(slideIndex, 'mySlides');

// Next/previous controls
function plusSlides(n, classname, dotname) {
  showSlides(slideIndex += n, classname, dotname);
}

// thumbnail image controls
function currentSlide(n, classname, dotname) {
  showSlides(slideIndex = n, classname, dotname);
}

function showSlides(n, classname, dotname) {
  var i;
  var slides = document.getElementsByClassName(classname);
  var dots = document.getElementsByClassName(dotname);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
  window.alert("scrolling");
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("newnav").style.top = "0";
  } else {
    document.getElementById("newnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
