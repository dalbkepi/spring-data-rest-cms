package com.lido.cms.dto;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.google.gson.internal.LinkedTreeMap;
import org.springframework.hateoas.hal.Jackson2HalModule;

import javax.xml.bind.annotation.XmlElement;
import java.util.Map;

public class ApiResource
{

	@XmlElement(
			name = "links"
	)
	@JsonProperty("_links")
	@JsonInclude(JsonInclude.Include.NON_EMPTY)
	@JsonSerialize(
			using = Jackson2HalModule.HalResourcesSerializer.class
	)
	@JsonDeserialize(
			using = Jackson2HalModule.HalResourcesDeserializer.class
	)
	private Map links = new LinkedTreeMap();

	public ApiResource(Map links)
	{
		this.links = links;
	}

	public ApiResource()
	{
	}

	public Map getLinks()
	{
		return links;
	}

	public void setLinks(Map links)
	{
		this.links = links;
	}

	@Override public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		ApiResource that = (ApiResource) o;

		return links != null ? links.equals(that.links) : that.links == null;
	}

	@Override public int hashCode()
	{
		return links != null ? links.hashCode() : 0;
	}

	@Override public String toString()
	{
		return "ApiResource{" +
				"links=" + links +
				'}';
	}
}
