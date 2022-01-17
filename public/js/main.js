const hamburger = document.querySelector(".hamburger");
const header    = document.querySelector("header")

hamburger.addEventListener("click", e=> {
    hamburger.classList.toggle("is-active");
    header.classList.toggle("show");
    
})