import animationOnScroll from "./animation.js";
import menuHambur from "./hamburger.js";

document.addEventListener("DOMContentLoaded", e=> {
    menuHambur(".hamburger", "header", "nav a");
    animationOnScroll(".fade-in", "appear");
    animationOnScroll(".slide-in", "appear");
})