// var hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener('click' , () =>{
//     var navBar=document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");
    
// })

let hamburger= document.querySelector('.hamburger');
let navBar=document.querySelector('.nav-bar');

hamburger.addEventListener('click' , () => {
    navBar.classList.toggle('active');
})
