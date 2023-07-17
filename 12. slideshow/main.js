let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log(slides);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides((slideIndex += n)); //slideIndex = slideIndex + n
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// setInterval(function(){},시간)
let stopSlide = setInterval(function () {
  plusSlides(1);
}, 2000);

let slideshowCon=document.getElementById('slideshow-container');
slideshowCon.addEventListener("mouseenter",function(){
    //setInterval멈추기
    clearInterval(stopSlide)
})


