import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-employee-list',
  template: `
  <h2>{{errorMsg}}</h2>
   <h2>employee list</h2>

   <ul *ngFor="let employee of employees">
    <li>{{ employee.name}}</li>
    </ul>`,  
  styles: ['']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  public errorMsg;

  public employees=[];

  ngOnInit() {
    this._employeeService.getEmployees()
         .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
