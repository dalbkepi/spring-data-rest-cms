package org.dalbkepi.sdrc.employeeService.pre;

import org.dalbkepi.sdrc.employeeService.entities.Employee;
import org.dalbkepi.sdrc.employeeService.entities.EmployeeRole;
import org.dalbkepi.sdrc.employeeService.repositories.EmployeeRepository;
import org.dalbkepi.sdrc.employeeService.repositories.EmployeeRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private EmployeeRoleRepository employeeRoleRepository;


	@Override
	public void run(String... strings) throws Exception {
		employeeRepository.save(new Employee("Max", "Mustermann", "Test User"));
		employeeRepository.save(new Employee("Maria", "Musterfrau", "Test Userin"));

		employeeRoleRepository.save(new EmployeeRole("User"));
		employeeRoleRepository.save(new EmployeeRole("Admin"));
	}
}
