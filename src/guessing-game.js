class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
       this.result = Math.ceil((this.max - this.min) / 2) + this.min;
       return this.result
    //    console.log(this.result)
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}
module.exports = GuessingGame;
