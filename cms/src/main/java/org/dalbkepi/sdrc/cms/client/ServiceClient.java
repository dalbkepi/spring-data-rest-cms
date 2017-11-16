package org.dalbkepi.sdrc.cms.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ServiceClient {

	@Autowired
	private ServiceClientImpl serviceClientImpl;

	public Map<String, String> getServices() {
		return serviceClientImpl.getServices();
	}

	public ResourceSupport getApiResource(String name) {
		return serviceClientImpl.getApiResource(name);
	}
}
