const slideHolder = document.querySelector (".slide-holder");
const slides = document.querySelectorAll(".slide-holder img");

//Btns

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Main

let counter = 0;
const size = slides[0].clientWidth;

nextBtn.addEventListener('click',() => {
    if (counter < 1) {
        slideHolder.style.transition = "transform 0.4s ease-in-out";
        counter++;
        console.log(counter);
        slideHolder.style.transform = 'translateX(' + (-size * counter) + 'px';
    }else { 
        slideHolder.style.transition = "transform 0.4s ease-in-out";
        counter=0;
        slideHolder.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
})

prevBtn.addEventListener('click',() => {
    if (counter > 0) {
        slideHolder.style.transition = "transform 0.4s ease-in-out";
        counter--;
        console.log(counter);
        slideHolder.style.transform = 'translateX(' + (-size * counter) + 'px';
    }else {
        slideHolder.style.transition = "transform 0.4s ease-in-out";
        counter=2;
        slideHolder.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
})

let prl = document.getElementById('parallaxMain');
window.addEventListener("scroll",() => {
    var value = window.scrollY;
    prl.style.paddingTop = value * 0.3 + "px";
})


var form1 = document.getElementById ('form1');
var form2 = document.getElementById ('form2');
var form3 = document.getElementById ('form3');

var btn12 = document.getElementById ('btn12');
var btn21 = document.getElementById ('btn21');
var btnSend = document.getElementById ('btnSend');

btn12.onclick = function() {
    form1.style.left = "-23.438vw";
    form2.style.left = "2.083vw";
}

btn21.onclick = function() {
    form1.style.left = "2.083vw";
    form2.style.left = "23.438vw";
}

btnSend.onclick = function() {
    form2.style.left = "-23.438vw";
    form3.style.left = "2.083vw";
}

const hamburger = document.getElementById('hamburger');
var hamburgerContent = document.getElementById('mob-nav');


hamburger.addEventListener('click',() => {
    if(hamburgerContent.style.display === "flex"){
        console.log("idegas");
        hamburgerContent.style.transition = "transform 0.4s ease-in-out";
        hamburgerContent.style.display = "none";   
    }
    else {
        
        hamburgerContent.style.display = "flex";
    }
    
})