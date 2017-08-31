import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor() { 
    this.resetPomadoro();
    setInterval(() =>this.tick(), 1000);
  }

  ngOnInit() {
  }

  resetPomadoro(): void{
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }
  
  togglePause(): void{
    this.isPaused = !this.isPaused;
    // если начат обратный отсчет
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  private tick() : void {
    if(!this.isPaused){
      this.buttonLabel = 'Pause';
      
      if(--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomadoro();
        }
      }
    }
  }


}
