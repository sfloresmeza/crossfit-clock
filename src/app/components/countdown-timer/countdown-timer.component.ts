import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  countdownFrom = 60;
  interval: number;
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.countdownFrom > 0) {
        this.countdownFrom--;
      }
    }, 1000);
  }
}
