package com.mano.socgenhrm.resource;

import com.mano.socgenhrm.domain.Employee;
import com.mano.socgenhrm.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class EmployeeResource {
    private EmployeeService service;
    public EmployeeResource(EmployeeService service) {
        this.service =service;
    }

    @GetMapping("/get-all-emp")
    public List<Employee> test(){
        return this.service.findAll();
    }

    @GetMapping("/find-emp/{id}")
    public ResponseEntity<Employee> findEmp(@PathVariable Long id){
        return ResponseEntity.of(this.service.findEmpById(id));
    }

    @DeleteMapping("/del-emp/{id}")
    public ResponseEntity<Void> deleteEmpById(@PathVariable Long id){
        this.service.deleteEmpById(id);
        return ResponseEntity.of(null);
    }

    @PostMapping("/save-emp")
    public ResponseEntity<Employee> saveEmp(@RequestBody Employee emp){
        return ResponseEntity.ok(this.service.saveOrUpdateEmp(emp));
    }

    @PutMapping("/save-emp")
    public ResponseEntity<Employee> updateEmp(@RequestBody Employee emp){
        return ResponseEntity.ok(this.service.saveOrUpdateEmp(emp));
    }
}
