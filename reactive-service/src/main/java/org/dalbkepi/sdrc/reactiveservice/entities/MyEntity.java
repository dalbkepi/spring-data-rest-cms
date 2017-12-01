package org.dalbkepi.sdrc.reactiveservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MyEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String foo;
	private String bar;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public String getFoo()
	{
		return foo;
	}

	public void setFoo(String foo)
	{
		this.foo = foo;
	}

	public String getBar()
	{
		return bar;
	}

	public void setBar(String bar)
	{
		this.bar = bar;
	}

	public MyEntity(String foo, String bar)
	{
		this.foo = foo;
		this.bar = bar;
	}

	public MyEntity()
	{
	}

	@Override public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		MyEntity myEntity = (MyEntity) o;

		if (id != null ? !id.equals(myEntity.id) : myEntity.id != null)
			return false;
		if (foo != null ? !foo.equals(myEntity.foo) : myEntity.foo != null)
			return false;
		return bar != null ? bar.equals(myEntity.bar) : myEntity.bar == null;
	}

	@Override public int hashCode()
	{
		int result = id != null ? id.hashCode() : 0;
		result = 31 * result + (foo != null ? foo.hashCode() : 0);
		result = 31 * result + (bar != null ? bar.hashCode() : 0);
		return result;
	}

	@Override public String toString()
	{
		return "MyEntity{" +
				"id=" + id +
				", foo='" + foo + '\'' +
				", bar='" + bar + '\'' +
				'}';
	}
}
