const durationInput = document.querySelector('#durationTime');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const circle = document.querySelector("circle");
const radius = circle.getAttribute("r");
const perimeter = 2 * Math.PI * radius;

//offset = (perimeter * timeRemaining)/ totalDuration - perimeter
circle.setAttribute("stroke-dasharray", perimeter);
let offset = 0
let duration;
const timer = new Timer(durationInput, playButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        // console.log('Timer Started');
    },
    onTick(timeRemaining) {
        console.log('Timer Started to tick');
        circle.setAttribute("stroke-dashoffset", ((perimeter * timeRemaining) / duration - perimeter));
    },
    onComplete() {
        console.log('Timer Stopped');
    }
});