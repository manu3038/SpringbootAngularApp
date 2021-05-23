import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './entites/employee-edit/employee-edit.component';
import { EmployeeComponent } from './entites/employee/employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'edit/:id', component: EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
