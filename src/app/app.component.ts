import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

//   seconds: number = 25;
//   intervalId: any;
  
//   constructor() {
//    this.intervalId = setInterval(() =>this.tick(), 1000);
// }

//   private tick(): void {
//     if (-- this.seconds < 1) {
//       clearInterval(this.intervalId);
//     }
//   }
}