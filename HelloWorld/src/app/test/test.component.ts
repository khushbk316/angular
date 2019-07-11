import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',

  // templateUrl: './test.component.html',
  template:` <div>inline
   template </div>`,
  // 
  styles: [`
    div{
    color:red
}
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
