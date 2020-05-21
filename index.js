class Timer{
    constructor(durationInput, playButton, pauseButton){
        this.durationInput = durationInput;
        this.playButton = playButton;
        this.pauseButton = pauseButton;

        this.playButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    //the reason we are using a arrow functions is because we can use 'this' keyword to access the methods and properties of that particular instance of the object
    start = () => {
        this.tick();
        //The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval()
        this.intervalId = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#durationTime');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

const timer = new Timer(durationInput, playButton, pauseButton);