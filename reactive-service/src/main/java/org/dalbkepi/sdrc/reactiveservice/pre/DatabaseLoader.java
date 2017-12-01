package org.dalbkepi.sdrc.reactiveservice.pre;

import org.dalbkepi.sdrc.reactiveservice.entities.MyEntity;
import org.dalbkepi.sdrc.reactiveservice.repositories.MyEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private MyEntityRepository repository;

	@Override
	public void run(String... strings) throws Exception {
		repository.save(new MyEntity("foo", "bar"));
		repository.save(new MyEntity("bar", "foo"));
	}
}
