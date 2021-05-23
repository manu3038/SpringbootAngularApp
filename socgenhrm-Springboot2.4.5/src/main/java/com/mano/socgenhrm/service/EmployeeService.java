package com.mano.socgenhrm.service;

import com.mano.socgenhrm.domain.Employee;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> findAll();
    Optional<Employee> findEmpById(Long id);
    void deleteEmpById(Long id);

    Employee saveOrUpdateEmp(Employee emp);
}
