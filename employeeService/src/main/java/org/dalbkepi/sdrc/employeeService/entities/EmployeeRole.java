package org.dalbkepi.sdrc.employeeService.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class EmployeeRole {
	private @Id @GeneratedValue Long id;
	private String name;

	public EmployeeRole(String name)
	{
		this.name = name;
	}

	public EmployeeRole()
	{
	}
}
