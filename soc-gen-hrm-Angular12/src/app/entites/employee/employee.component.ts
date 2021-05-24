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
    this.loadAllEmps()
  }
  loadAllEmps() {
    this.empList = [];
    this.service.getAllEmps().subscribe(res => {
      res.body?.forEach(e => {
        this.empList.push(e);
      });
    });
  }
  deleteEmp(id: number) {
    this.service.delete(id).subscribe(res => {
      alert("employee with " + id + " is successfully deleted");
      this.ngOnInit();
    });
  }
}
