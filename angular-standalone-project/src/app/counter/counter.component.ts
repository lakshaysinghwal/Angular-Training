import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  count = 10

  @Output()
  myEvent = new EventEmitter()
  handleChange() {
    console.log("change event occurred. Initial count value 10  Count value now : ", this.count)
  }
  handleCountChange() {
    console.log("Two way event : ", this.count)
    //Send the modified data to parent
    this.myEvent.emit(this.count)
  }

  //When the life of a component is created
  constructor() {
    console.log("Counter component created")
  }
}
