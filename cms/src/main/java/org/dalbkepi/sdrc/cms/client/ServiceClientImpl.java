package org.dalbkepi.sdrc.cms.client;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@FeignClient(serviceId = "gateway", configuration = FeignConfiguration.class)
public interface ServiceClientImpl {

	@RequestMapping(path = "/routes", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	Map<String, String> getServices();

	@RequestMapping(path = "/{name}/api/employees", consumes = "application/hal+json", produces = "application/hal+json")
	ResourceSupport getApiResource(@PathVariable("name") String name);
}
