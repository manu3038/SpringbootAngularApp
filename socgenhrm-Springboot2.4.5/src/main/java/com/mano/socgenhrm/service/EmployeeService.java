package com.mano.socgenhrm.service;

import com.mano.socgenhrm.domain.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> findAll();
    Optional<Employee> findEmpById(Long id);
    void deleteEmpById(Long id);
}
