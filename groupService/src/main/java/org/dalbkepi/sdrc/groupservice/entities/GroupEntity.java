package org.dalbkepi.sdrc.groupservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class GroupEntity
{
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;

	public GroupEntity(String name, String description)
	{
		this.name = name;
		this.description = description;
	}

	public GroupEntity()
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

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	@Override public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		GroupEntity groupEntity = (GroupEntity) o;

		if (id != null ? !id.equals(groupEntity.id) : groupEntity.id != null)
			return false;
		if (name != null ? !name.equals(groupEntity.name) : groupEntity.name != null)
			return false;
		return description != null ? description.equals(groupEntity.description) : groupEntity.description == null;
	}

	@Override public int hashCode()
	{
		int result = id != null ? id.hashCode() : 0;
		result = 31 * result + (name != null ? name.hashCode() : 0);
		result = 31 * result + (description != null ? description.hashCode() : 0);
		return result;
	}

	@Override public String toString()
	{
		return "GroupEntity{" +
				"id=" + id +
				", name='" + name + '\'' +
				", description='" + description + '\'' +
				'}';
	}
}
