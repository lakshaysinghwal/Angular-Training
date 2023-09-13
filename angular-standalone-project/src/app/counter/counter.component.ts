import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
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

  //When the life of a component is created(Adding component to a DOM)
  constructor() {
    console.log("Counter component created")
    // let hobj:any = document.getElementById("hc")
    // hobj.style.color = "red"

  }


  //Before removing component from DOM
  ngOnDestroy(): void {
    console.log("Counter component destroyed")
    
  }

  //After rendering
  ngOnInit(): void {
    console.log("Onit Counter Component")
    let hobj:any = document.getElementById("hc")
    hobj.style.color = "red"
  }
}
