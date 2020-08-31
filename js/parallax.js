window.addEventListener("DOMContentloaded", scrollLoop, false);

var headerBackGround = document.querySelector("#slider");
var partnersBackGround = document.querySelector("#partners-background");

var xScrollPosition;
var yScrollPosition;

function scrollLoop(evt) {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition + -0.2, headerBackGround);
    setTranslate(0, yScrollPosition + -1.5, partnersBackGround);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
    // transform: translate3d(0px, 10px, 0);
}