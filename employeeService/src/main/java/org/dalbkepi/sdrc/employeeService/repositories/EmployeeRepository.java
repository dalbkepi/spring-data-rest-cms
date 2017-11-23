package org.dalbkepi.sdrc.employeeService.repositories;

import org.dalbkepi.sdrc.employeeService.entities.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>
{
}
