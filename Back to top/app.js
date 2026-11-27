"use strict";

const backToTop = document.querySelector(".backtotop");

if(backToTop){
    window.addEventListener("scroll", srollListener);
}
function srollListener(){
    const currentScroll = window.scrollY;

    if(currentScroll > 360){
        backToTop.classList.add("backtotop--show");
    } else{
        backToTop.classList.remove("backtotop--show");
    }
}






