import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  increaseFunction=()=>{
    this.count = this.count + 1;
  }
  decreaseFunction = () => {
    if (this.count > 0)
    {
      this.count = this.count - 1;
    }
  }
  resetFunction=()=>{
    this.count = 0;
  }
}
