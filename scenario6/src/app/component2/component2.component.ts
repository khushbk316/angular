import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public elderChildEvent=new EventEmitter();
  public fireEvent(value)
  {
    console.log(value);
    this.elderChildEvent.emit(value);
  }


}
