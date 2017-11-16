package org.dalbkepi.sdrc.employeeService.pre;

import org.dalbkepi.sdrc.employeeService.entities.Employee;
import org.dalbkepi.sdrc.employeeService.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository repository;

	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Max", "Mustermann", "Test User"));
	}
}
