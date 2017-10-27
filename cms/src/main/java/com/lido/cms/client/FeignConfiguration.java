package com.lido.cms.client;

import feign.Logger;
import feign.Request;
import feign.Retryer;
import org.springframework.context.annotation.Bean;

public class FeignConfiguration {
	@Bean
	public Request.Options requestOptions() {
		return new Request.Options(10000, 10000);
	}


	@Bean
	public Retryer feignRetryer() {
		return Retryer.NEVER_RETRY;
	}

	@Bean
	Logger.Level feignLoggerLevel() {
		return Logger.Level.FULL;
	}

}
