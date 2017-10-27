package com.lido.cms.client;

import feign.Param;
import feign.RequestLine;

import java.util.Map;

public interface ApiClient {
	@RequestLine("GET /{name}/api")
	Map findByName(@Param("name") String name);

}
