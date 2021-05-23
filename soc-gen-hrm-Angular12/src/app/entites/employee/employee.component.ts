import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public empList: Employee[] = [];
  constructor(private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.getAllEmps().subscribe(res => {
      res.body?.forEach(e => {
        this.empList.push(e);
      });
      this.service.empList = this.empList;
      console.log(this.service.empList.filter(e => e.id == 1));
    });
  }

}
