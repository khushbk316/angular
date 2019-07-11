import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3 [ngClass]="messageClasses">welcome {{name}} this is ex of binding for objects..</h3>
  <h3 [style.color]="hasError?'red':'orange'">{{2+2}}</h3>
  <h3 [style.color]="setColor">property and style binding</h3>
   <h3 [class.text-danger]="hasError">{{"welcome"+name}}</h3>
  <h3 class="text-special" [class]="successClass">{{greet()}}</h3>
  <button (click)="onClick($event)">Greetings</button>
  {{greetings}}
  <button (click)="greetings='welcome again'">Greetings</button>
  <h3><input [disabled]="false" [id]="myId" type="text" value="anything"></h3>
  <input #myValue type="text">
  <button (click)="logMessage(myValue.value)">User</button>`,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }

  `]
})
export class TestComponent implements OnInit {
  public name="khushbu";
  // public myId="testId";
  // public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public setColor="blue";
  public greetings="";
  public messageClasses=
  { 
    "text-success":this.hasError,
    "text-special":this.isSpecial,
    "text-danger":this.hasError
  }
  constructor() { }

  ngOnInit() {
  }
  greet()
  {
    return "hello  "+this.name;
  }
  // onClick()
  // {
  //   console.log("hi khush");
  //   this.greetings="using button";
  // }



  //for event ......

  onClick(event)
   {
     console.log(event);
     this.greetings=event.type;
   }

   logMessage(value)
   {
     console.log(value);
   } 
  

}
