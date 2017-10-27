package com.lido.employeeService.repositories;

import com.lido.employeeService.entities.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
