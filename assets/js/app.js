const heroText = document.querySelectorAll('.hero-text');
const injectedStyle = document.getElementById('injectedStyle')

const heroTextWidth = heroText[0].clientWidth
const heroTextHeight = heroText[0].clientHeight

injectedStyle.innerHTML = `
.thunder-icon{
    left: calc(50% - ${0.5 * heroTextWidth + 40}px);
    top: calc(50% - ${0.5 * heroTextHeight - 60}px);
}
.thunder-icon-2{
    left: calc(50% - ${0.5 * heroTextWidth + 18}px);
    top: calc(50% - ${0.5 * heroTextHeight - 66}px);
}
.bomb-icon{
    left: calc(50% + ${0.5 * heroTextWidth + 20}px);
    top: calc(50% + ${0.5 * heroTextHeight - 61}px);
}
`

const smallMessagebox = document.querySelector(".small-messagebox")
const barcodeIcon = document.querySelector(".barcode-icon")

barcodeIcon.onmouseover = () => {
    smallMessagebox.style.display = "block"
    barcodeIcon.backgroundColor = "#8d8d8d";
}

barcodeIcon.onmouseleave = () => {
    smallMessagebox.style.display = "none"
    barcodeIcon.backgroundColor = "#000000";
}

// transition animation script
let initialCount = 0;
const animParentCont = document.querySelectorAll('.animated-parent-container');
const animChildCont = document.querySelectorAll('.animated-child-container');
const selectorBox = document.querySelectorAll('.selector-box');
const selectorBoxCircle = document.querySelectorAll('.selector-box-circle');

const currentSlide = (e) => {
    console.log("Current", e)
    selectorBoxCircle[e] && (selectorBoxCircle[e].style.backgroundColor = "#ffffff")
    animParentCont[e].style.zIndex = `89`
    animParentCont[e] && (animParentCont[e].style.transform = `translateX(0%)`)
    animChildCont[e] && (animChildCont[e].style.transform = `translateX(0%)`)
}
const previousSlide = (e) => {
    for (i = (e - 2); i >= 0; i--) {
        console.log("Previous", i)
        selectorBoxCircle[i].style.backgroundColor = "transparent"
        animParentCont[i].style.zIndex = `0`
        animParentCont[i] && (animParentCont[i].style.transform = `translateX(0%)`)
        animChildCont[i] && (animChildCont[i].style.transform = `translateX(0%)`)
    }
}
const nextSlide = (e) => {
    for (i = e; i <= animParentCont.length; i++) {
        console.log("next", i)
        selectorBoxCircle[i].style.backgroundColor = "transparent"
        animParentCont[i] && (animParentCont[i].style.transform = `translateX(-100%)`)
        animChildCont[i] && (animChildCont[i].style.transform = `translateX(100%)`)
    }
}
currentSlide(initialCount)
let click = (e) => {
    e.onclick = () => {
        let value = e.getAttribute('value');
        console.clear()
        previousSlide(value)
        currentSlide(value - 1)
        nextSlide(value)
    }
}
for (var e of selectorBox) {
    click(e);
};
