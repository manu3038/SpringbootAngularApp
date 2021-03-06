import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
export type EntityResponseType = HttpResponse<Employee>;

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = "http://localhost:8080/api";
  private getAllEmpUrl = this.baseUrl + "/get-all-emp";
  private getEmpById = this.baseUrl + "/find-emp";
  private deleteEmpUrl = this.baseUrl + "/del-emp";
  private saveEmpUrl = this.baseUrl + "/save-emp";
  constructor(private http: HttpClient) { }

  getAllEmps() {
    return this.http.get<Employee[]>(this.getAllEmpUrl, { observe: 'response' })
  }
  find(id: number) {
    return this.http.get<Employee>(`${this.getEmpById}/${id}`, { observe: 'response' })
  }
  delete(id: number) {
    return this.http.delete<Employee>(`${this.deleteEmpUrl}/${id}`, { observe: 'response' })
  }
  create(emp: Employee) {
    return this.http.post<Employee>(this.saveEmpUrl, emp, { observe: 'response' })
  }
  update(emp: Employee) {
    return this.http.put<Employee>(this.saveEmpUrl, emp, { observe: 'response' })
  }
}
