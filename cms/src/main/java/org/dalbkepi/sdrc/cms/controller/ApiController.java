package org.dalbkepi.sdrc.cms.controller;

import org.dalbkepi.sdrc.cms.client.ApiClient;
import org.dalbkepi.sdrc.cms.client.ServiceClient;
import feign.Feign;
import feign.Logger;
import feign.gson.GsonDecoder;
import feign.gson.GsonEncoder;
import feign.okhttp.OkHttpClient;
import feign.slf4j.Slf4jLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ApiController {

	@Autowired
	private ServiceClient serviceClient;

	@RequestMapping("/api/{name}")
	public Object getApiResource(@PathVariable(name = "name") String name) {
		ApiClient apiClient = Feign.builder()
				.client(new OkHttpClient())
				.encoder(new GsonEncoder())
				.decoder(new GsonDecoder())
				.logger(new Slf4jLogger(ApiClient.class))
				.logLevel(Logger.Level.FULL)
				.target(ApiClient.class, "http://localhost:8081");
		Map resources = apiClient.findByName(name);
		return resources.get("_links");
	}
}
