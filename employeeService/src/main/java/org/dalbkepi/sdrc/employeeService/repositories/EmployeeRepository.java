package org.dalbkepi.sdrc.employeeService.repositories;

import org.dalbkepi.sdrc.employeeService.entities.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
