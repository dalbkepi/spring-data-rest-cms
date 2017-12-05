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
		employeeRepository.save(new Employee("John", "Doe", "Test User2"));
		employeeRepository.save(new Employee("Jane", "Doe", "Test Userin2"));
		employeeRepository.save(new Employee("Paul", "Parry", "Test User3"));
		employeeRepository.save(new Employee("Alex", "Arranis", "Test Userin3"));
		employeeRepository.save(new Employee("Jammy", "Jassy", "Test User4"));
		employeeRepository.save(new Employee("Caren", "Cachi", "Test Userin4"));
		employeeRepository.save(new Employee("Jenna", "Jorans", "Test User5"));
		employeeRepository.save(new Employee("Lea", "Luis", "Test Userin5"));
		employeeRepository.save(new Employee("Routh", "Rabbit", "Test User6"));
		employeeRepository.save(new Employee("Jerry", "James", "Test Userin6"));

		employeeRoleRepository.save(new EmployeeRole("User"));
		employeeRoleRepository.save(new EmployeeRole("Admin"));
	}
}
