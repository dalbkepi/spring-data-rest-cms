package org.dalbkepi.sdrc.employeeService.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
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

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	@Override public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		EmployeeRole that = (EmployeeRole) o;

		if (id != null ? !id.equals(that.id) : that.id != null)
			return false;
		return name != null ? name.equals(that.name) : that.name == null;
	}

	@Override public int hashCode()
	{
		int result = id != null ? id.hashCode() : 0;
		result = 31 * result + (name != null ? name.hashCode() : 0);
		return result;
	}

	@Override public String toString()
	{
		return "EmployeeRole{" +
				"id=" + id +
				", name='" + name + '\'' +
				'}';
	}
}
