package org.dalbkepi.sdrc.employeeService.repositories;

import org.dalbkepi.sdrc.employeeService.entities.EmployeeRole;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface EmployeeRoleRepository extends PagingAndSortingRepository<EmployeeRole, Long>
{
}
