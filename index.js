const durationInput = document.querySelector('#durationTime');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

const timer = new Timer(durationInput, playButton, pauseButton, {
    onStart() {
    console.log('Timer Started');
    },
    onTick() {
        console.log('Timer Started to tick');
    },
    onComplete() {
        console.log('Timer Stopped');
    }
});