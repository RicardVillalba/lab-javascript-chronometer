class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    let currentMinutes = this.currentTime / 60;
    let minutesRounded = Math.floor(currentMinutes);
    return minutesRounded;
  }

  getSeconds() {
    let secondsRounded = this.currentTime % 60;
    return secondsRounded;
  }
  
  twoDigitsNumber(num) {
    let twonumbers = ("0" + num).slice(-2);
    return twonumbers;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let now= `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
    return now;
  }
}
