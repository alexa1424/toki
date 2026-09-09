let btn= document.querySelector("button");
let condition= false;

function button(){
let bt=document.querySelector(".sait");
    if(condition){  
bt.innerHTML='<div> <img class="i1" src="images/i (1).webp"> </div>';
        condition=false;
    }
    else{

bt.innerHTML= '<iframe src="https://animediateka.me" frameborder="0"></iframe>';
condition=true;
}
   
}
btn.addEventListener("click", button);


let yn= document.querySelector(".logo");
let hed= document.querySelector("header");
let lin= document.querySelector(".len");
let lin1= document.querySelector(".len1");
let lin2= document.querySelector(".len2");
let lin3= document.querySelector(".len3");
let condition1= false;


function circle(){
    if(condition1){
hed.style.backgroundColor="black";
lin.style.color= "white";
lin1.style.color= "white";
lin2.style.color= "white";
lin3.style.color= "white";
condition1= false;
}
    else{
hed.style.backgroundColor="white";
lin.style.color= "black";
lin1.style.color= "black";
lin2.style.color= "black";
lin3.style.color= "black";
condition1= true;
}
}

yn.addEventListener("click", circle);

let html= document.querySelector(".preloaded");

function preloader(){
html.style.display="none";
document.body.classList.add("dog");
setTimeout(loaded,3500);
}

function loaded(){
// let notdog= document.querySelector(".dog");
// notdog.style.display="none";
document.body.classList.remove("dog");
html.style.display="block";
}

document.addEventListener('DOMContentLoaded', preloader);

const burger = document.querySelector(".burger");
const menu = document.querySelector("ul");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  burger.classList.toggle("active");
});

