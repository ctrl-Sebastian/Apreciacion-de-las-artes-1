let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");

let Unidad1 = document.querySelector(".unidad1");
let Unidad2 = document.querySelector(".unidad2");
let Unidad3 = document.querySelector(".unidad3");
let Unidad4 = document.querySelector(".unidad4");
let Unidad5 = document.querySelector(".unidad5");
let Unidad6 = document.querySelector(".unidad6");
let Unidad7 = document.querySelector(".unidad7");

btn1.addEventListener('click', () =>{
    console.log('btn1 clicked');
    btn1.style.color ='red'
    btn2.style.color ='white'
    btn3.style.color ='white'
    btn4.style.color ='white'
    btn5.style.color ='white'
    btn6.style.color ='white'
    btn7.style.color ='white'
    if (Unidad1.style.display === 'block'){
        Unidad1.style.display = 'none';
    } else {
        Unidad1.style.display = 'block';
        
    }
});

btn2.addEventListener('click', () =>{
    console.log('btn2 clicked');
    btn1.style.color ='white'
    btn2.style.color ='red'
    btn3.style.color ='white'
    btn4.style.color ='white'
    btn5.style.color ='white'
    btn6.style.color ='white'
    btn7.style.color ='white'
    if (Unidad2.style.display === 'none'){
        Unidad2.style.display = 'block';
    } else {
        Unidad2.style.display = 'none';
    }
});

btn3.addEventListener('click', () =>{
    console.log('btn3 clicked');
    btn1.style.color ='white'
    btn2.style.color ='white'
    btn3.style.color ='red'
    btn4.style.color ='white'
    btn5.style.color ='white'
    btn6.style.color ='white'
    btn7.style.color ='white'
    if (Unidad3.style.display === 'none'){
        Unidad3.style.display = 'block';
    } else {
        Unidad3.style.display = 'none';
    }
});

btn4.addEventListener('click', () =>{
    console.log('btn4 clicked');
    btn1.style.color ='white'
    btn2.style.color ='white'
    btn3.style.color ='white'
    btn4.style.color ='red'
    btn5.style.color ='white'
    btn6.style.color ='white'
    btn7.style.color ='white'
    if (Unidad4.style.display === 'none'){
        Unidad4.style.display = 'block';
    } else {
        Unidad4.style.display = 'none';
    }
});

btn5.addEventListener('click', () =>{
    console.log('btn5 clicked');
    btn1.style.color ='white'
    btn2.style.color ='white'
    btn3.style.color ='white'
    btn4.style.color ='white'
    btn5.style.color ='red'
    btn6.style.color ='white'
    btn7.style.color ='white'
    if (Unidad5.style.display === 'none'){
        Unidad5.style.display = 'block';
    } else {
        Unidad5.style.display = 'none';
    }
});

btn6.addEventListener('click', () =>{
    console.log('btn6 clicked');
    btn1.style.color ='white'
    btn2.style.color ='white'
    btn3.style.color ='white'
    btn4.style.color ='white'
    btn5.style.color ='white'
    btn6.style.color ='red'
    btn7.style.color ='white'
    if (Unidad6.style.display === 'none'){
        Unidad6.style.display = 'block';
    } else {
        Unidad6.style.display = 'none';
    }
});

btn7.addEventListener('click', () =>{
    console.log('btn7 clicked');
    btn1.style.color ='white'
    btn2.style.color ='white'
    btn3.style.color ='white'
    btn4.style.color ='white'
    btn5.style.color ='white'
    btn6.style.color ='white'
    btn7.style.color ='red'
    if (Unidad7.style.display === 'none'){
        Unidad7.style.display = 'block';
    } else {
        Unidad7.style.display = 'none';
    }
});

