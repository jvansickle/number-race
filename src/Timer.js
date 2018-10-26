export default class Timer {
    _timeout;
    _centiseconds = 0;
    _callback;

    constructor(centisecondCallback) {
        this._callback = centisecondCallback;
    }

    start() {
        this._timeout = setInterval(this._increment, 100, this);
    }

    stop() {
        clearInterval(this._timeout);
    }

    reset() {
        this._centiseconds = 0;
    }

    _increment(timer) {
        timer._centiseconds++;
        timer._callback(timer._centiseconds);
    }
}