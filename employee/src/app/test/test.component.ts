import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `

  
  <h2 *ngIf="displayName; then thenBlock; else elseBlock">
 </h2> 
  <ng-template #elseBlock>
     <h2>
       name is hidden
     </h2>
   </ng-template>  

<ng-template #thenBlock>
     <h2>
       Codevolution
     </h2>
   </ng-template>  



 <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>

  </div>


  <div *ngFor="let i of colors;index as index;first as f;last as l">
  <h2>{{index}} {{i|uppercase}}  {{f}}  {{l}}</h2>
  </div>


  
  Hey there...this is two way binding

  <input [(ngModel)]="name" type="text">
{{name}}




 
<h2>{{"hello   "+parentData}}</h2>

<button (click)="fireEvent()">Send event </button>


<h2>{{person|json}}</h2>

<h2>{{date|date:'short'}}

  `,

  styles: []
})
export class TestComponent implements OnInit {
  public name="";
  public date=new Date();

  //this is data recieving from parent...
  @Input() public parentData; 


  //this is data passing to the parent....
   @Output() public cildEvent=new EventEmitter();
   public fireEvent()
   {
     this.cildEvent.emit('hello user');
   }


   public person={
    "firstNme":"john",
    "lastName":"mathew"
   }

  public color="red";
  public colors=["red","green","blue"];
  public displayName=false;
  constructor() { }

  ngOnInit() {
  }

}
 