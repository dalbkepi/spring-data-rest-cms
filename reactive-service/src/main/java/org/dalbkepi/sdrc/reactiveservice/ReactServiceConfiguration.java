package org.dalbkepi.sdrc.reactiveservice;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;

@Configuration
public class ReactServiceConfiguration {
	@Bean
	public ExecutorService transactionPostExecutorService() {
		final ThreadFactory threadFactory = new ThreadFactoryBuilder()
				.setNameFormat("transactionPostExecutor-%d")
				.setDaemon(true)
				.build();
		ExecutorService es = Executors.newFixedThreadPool(2,threadFactory);
		return es;
	}

}
