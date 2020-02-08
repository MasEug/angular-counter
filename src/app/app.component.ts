import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  countObs: Observable<number> = new Observable<number>();
  counter: number;
  text = 0;

  ngOnInit(): void {
    this.countObs = of(this.text);
  }
  // ввод значения в input
  onAmountChange(event): void {
    this.countObs = of(this.text);
  }

  // enter only numbers
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  // added count < 99
  addedCount(): void {
    this.countObs.subscribe(plus => {
      this.counter = plus;
      if (this.counter < 99) {
        this.counter++;
      }
      this.text = this.counter;
    });
    this.countObs = of(this.counter);
  }

  // minus count
  minusCount(): void {
    this.countObs.subscribe(minus => {
      this.counter = minus;
      if (this.counter > 0) {
        this.counter--;
      }
      this.text = this.counter;
    });
    this.countObs = of(this.counter);
  }
}
