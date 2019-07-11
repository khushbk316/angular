import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent=new EventEmitter();
    
  myEvent(value)
  {
    console.log(value);
    this.childEvent.emit(value);
  }
}
