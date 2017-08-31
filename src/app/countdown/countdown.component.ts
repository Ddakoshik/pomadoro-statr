import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  seconds: number = 25;
  intervalId: any;

  constructor() { 
    this.intervalId = setInterval(() =>this.tick(), 1000);
  }

  ngOnInit() {
  }
  
  private tick(): void {
    if (-- this.seconds < 1) {
      clearInterval(this.intervalId);
    }
  }
}
