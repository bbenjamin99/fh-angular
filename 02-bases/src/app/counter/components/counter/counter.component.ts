import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:
  `
  <h1>Hello from this component</h1>
  <h3>counter : {{counter}}</h3>
  <button (click)="sumarRestar(+1)">+1</button>
  <button (click)="sumarRestar(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {
  
  counter : number = 10;
  public sumarRestar(value :number ): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }

}
