import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData: String
  enfant="balkis"
  @Output() childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onChange(value){
    this.childEvent.emit(value)
  }

}
