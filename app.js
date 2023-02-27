
/* DATE FEB 18 2023     DOM = DATA OBJECT MODEL
Const sample = document.querySelector(".sample"); */

const navContainer = document.querySelector('.nav-container');
const hamInit = document.querySelector('.ham-init');
const logo = document.querySelector('.logo');
const uList = document.querySelector('.nav-container ul');
const navLinks = document.querySelector('.nav-links');

hamInit.addEventListener( "click", ()=>{
 
     navContainer.classList.toggle('ham-exp')
     navLinks.classList.toggle('nav-active')
     logo.classList.toggle('logo-active');
     hamInit.classList.toggle('.ham-init-exp');
});