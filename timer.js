class Timer{
    constructor(durationInput, playButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.playButton = playButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.playButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    //the reason we are using a arrow functions is because we can use 'this' keyword to access the methods and properties of that particular instance of the object
    start = () => {
        this.tick();
        if (this.onStart) {
            this.onStart(this.timeRemaining);   
        }
        //The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval()
        this.intervalId = setInterval(this.tick, 50);
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        //condition to check the underflow of the timer
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05;
            if (this.onTick) {
                this.onTick(this.timeRemaining); 
            }
        }    
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
} 