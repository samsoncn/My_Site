const typedTextSpan = document.querySelector(".txt-type");
const cursorSPan = document.querySelector(".cursor");

const textArray = ["Software Developer", "Product Manager", "Web Developer", "Badminton Coach"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSPan.classList.contains("typing")) cursorSPan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSPan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if(charIndex > 0) {
        if(!cursorSPan.classList.contains("typing")) cursorSPan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSPan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});