// Concept: Arrow functions are shorter function syntax with lexical `this` binding.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log('doubled:', doubled);

class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    this.interval = setInterval(() => {
      this.seconds += 1;
      if (this.seconds >= 3) {
        clearInterval(this.interval);
        console.log('timer stopped at', this.seconds);
      }
    }, 100);
  }
}

const t = new Timer();
t.start();
