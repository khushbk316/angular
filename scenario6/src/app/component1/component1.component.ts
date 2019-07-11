import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public text="";

  constructor() { }

  ngOnInit() {
  }

  forward(value) {
    console.log(value);
    this.text=value;
  }


}
