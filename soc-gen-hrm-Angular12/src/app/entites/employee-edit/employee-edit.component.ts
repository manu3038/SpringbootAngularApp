import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee/employee-service.service';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  empForm: FormGroup = this.fb.group({
    id: ['', ''],
    name: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.maxLength(50)]],
    phoneNo: ['', [Validators.required, Validators.maxLength(10)]],
    panNo: ['', [Validators.required, Validators.maxLength(10)]],
    domain: ['', [Validators.required, Validators.maxLength(50)]],
    designation: ['', [Validators.required, Validators.maxLength(50)]],
    yearsOfExp: ['', [Validators.required, Validators.maxLength(2)]],
  });
  employee: Employee = new Employee;
  formType: string = "add";
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private service: EmployeeServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        // get the values from API and patch to form        
        this.service.find(param['id']).subscribe(res => {
          this.employee = res.body!;
          this.formType = "update";
          this.empForm.patchValue({
            id: this.employee.id,
            name: this.employee.name,
            email: this.employee.email,
            phoneNo: this.employee.phoneNo,
            panNo: this.employee.panNo,
            domain: this.employee.domain,
            designation: this.employee.designation,
            yearsOfExp: this.employee.yearsOfExp
          });
          console.log(this.empForm);
        })
      } else {
        // this is in add 
      }
      this.empForm.controls['id'].disable();
    });
  }
  saveEmp() {
    if (this.formType === "add") {
      this.service.create(this.empForm.getRawValue()).subscribe(res => {
        alert('Saved Successfully');
        console.log(res.body);
      })
    } else {
      this.service.update(this.empForm.getRawValue()).subscribe(res => {
        alert('Saved Successfully');
        console.log(res.body);
      })
    }
  }
}
