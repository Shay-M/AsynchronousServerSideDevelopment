class StopWatch {
    constructor() {
        let duration = 0;
        let startTime;
        let isStartRunning = false;

        this.start = function () {
            if (isStartRunning)
                throw new Error('stopWatch has already started.');

            isStartRunning = true;
            console.log('stopWatch is started');

            startTime = new Date();

        };

        this.stop = function () {
            if (!isStartRunning)
                throw new Error('stopWatch is not stated.');

            isStartRunning = false;
            console.log('stopWatch is stopped');

            const secondsPass = (new Date().getTime() - startTime.getTime()) / 1000;
            duration += secondsPass;
            //startTime.stop();
        };

        this.resat = function () {
            isStartRunning = false;
            startTime = null;
            duration = 0;
            console.log('stopWatch is resat');
        };

        Object.defineProperty(this, 'duration', {
            get: function () {
                if (isStartRunning)
                    throw new Error('stopWatch is running, stop to get duration.');
                return duration;
            }
        });
        // like defineProperty
        this.getDuration = function () {
            return duration;
        };


    }
}


const stopWatch = new StopWatch();