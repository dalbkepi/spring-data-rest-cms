package com.lido.cms.dto;

import java.util.Map;

public class Service {
	private Map<String, String> values;

	public Service(Map<String, String> values)
	{
		this.values = values;
	}

	public Service()
	{
	}

	public Map<String, String> getValues()
	{
		return values;
	}

	public void setValues(Map<String, String> values)
	{
		this.values = values;
	}

	@Override public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		Service service = (Service) o;

		return values != null ? values.equals(service.values) : service.values == null;
	}

	@Override public int hashCode()
	{
		return values != null ? values.hashCode() : 0;
	}

	@Override public String toString()
	{
		return "Service{" +
				"values=" + values +
				'}';
	}
}
