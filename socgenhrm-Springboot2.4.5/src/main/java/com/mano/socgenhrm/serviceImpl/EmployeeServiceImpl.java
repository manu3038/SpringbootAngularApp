package com.mano.socgenhrm.serviceImpl;

import com.mano.socgenhrm.domain.Employee;
import com.mano.socgenhrm.repository.EmployeeRepository;
import com.mano.socgenhrm.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository repo;
    public EmployeeServiceImpl(EmployeeRepository repository) {
        this.repo = repository;
    }

    @Override
    public List<Employee> findAll() {
        return repo.findAll();
    }

    @Override
    public Optional<Employee> findEmpById(Long id) {
        return repo.findById(id);
    }

    @Override
    public void deleteEmpById(Long id) {
        repo.deleteById(id);
    }
}
