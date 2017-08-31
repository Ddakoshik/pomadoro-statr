import { Directive, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() seconds: number;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();
  constructor() { 
    this.intervalId = setInterval(() =>this.tick(), 1000);
  }

  ngOnInit() {
  }
  
  private tick(): void {
    if (-- this.seconds < 1) {
      clearInterval(this.intervalId);
      // поставить событие по окончанию обратного отсчета
      this.complete.emit(null)
    }
    this.progress.emit(this.seconds);
  }
}

// @Component({
// selector: 'pomadoro-timer',
// directives: [CountdownComponent],
// template: '<countdown></countdown>'
// })
// class PomodoroTimerComponent {}
// bootstrap(PomodoroTimerComponent);