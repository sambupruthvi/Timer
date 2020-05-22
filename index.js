const durationInput = document.querySelector('#durationTime');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const circle = document.querySelector("circle");
const radius = circle.getAttribute("r");
const perimeter = 2 * Math.PI * radius;

circle.setAttribute("stroke-dasharray", perimeter);
const change = perimeter / durationInput.getAttribute("value");
let offset = 0
const timer = new Timer(durationInput, playButton, pauseButton, {
    onStart() {
    console.log('Timer Started');
    },
    onTick() {
        console.log('Timer Started to tick');
        offset = offset - change;
        circle.setAttribute("stroke-dashoffset", offset);
    },
    onComplete() {
        console.log('Timer Stopped');
    }
});