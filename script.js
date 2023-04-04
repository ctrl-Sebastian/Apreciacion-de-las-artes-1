let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'high_resolution',
    accessToken: 'IGQVJYc2NWaGlKN2x5emZAYMUhURFFXU0UxWGFuLU5rSXFETUlMNUxCS2tjSHQ3WEg3VWZATcWRNSkhwZAFlCbVZAiNnNZAMTZANR1IwQXFpOVJ2UFQ4WlRJSWM2bjdrNEhyRWRxSnBnM3l2ZAG1MSjRvTl9CNgZDZD'
});
userFeed.run();

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");

let Unidades = document.querySelectorAll(".unidad");

let Unidad1 = document.querySelector(".unidad1");
let Unidad2 = document.querySelector(".unidad2");
let Unidad3 = document.querySelector(".unidad3");
let Unidad4 = document.querySelector(".unidad4");
let Unidad5 = document.querySelector(".unidad5");
let Unidad6 = document.querySelector(".unidad6");
let Unidad7 = document.querySelector(".unidad7");

btn1.addEventListener('click', () =>{
    console.log('btn1 clicked');
    if (Unidad1.style.display === 'block'){
        Unidad1.style.display = 'none';
    } else {
        Unidad1.style.display = 'block';
        
    }
});

btn2.addEventListener('click', () =>{
    console.log('btn2 clicked');
    if (Unidad2.style.display === 'none'){
        Unidad2.style.display = 'block';
    } else {
        Unidad2.style.display = 'none';
    }
});

btn3.addEventListener('click', () =>{
    console.log('btn3 clicked');
    if (Unidad3.style.display === 'none'){
        Unidad3.style.display = 'block';
    } else {
        Unidad3.style.display = 'none';
    }
});

btn4.addEventListener('click', () =>{
    console.log('btn4 clicked');
    if (Unidad4.style.display === 'none'){
        Unidad4.style.display = 'block';
    } else {
        Unidad4.style.display = 'none';
    }
});

btn5.addEventListener('click', () =>{
    console.log('btn5 clicked');
    if (Unidad5.style.display === 'none'){
        Unidad5.style.display = 'block';
    } else {
        Unidad5.style.display = 'none';
    }
});

btn6.addEventListener('click', () =>{
    console.log('btn6 clicked');
    if (Unidad6.style.display === 'none'){
        Unidad6.style.display = 'block';
    } else {
        Unidad6.style.display = 'none';
    }
});

btn7.addEventListener('click', () =>{
    console.log('btn7 clicked');
    if (Unidad7.style.display === 'none'){
        Unidad7.style.display = 'block';
    } else {
        Unidad7.style.display = 'none';
    }
});

