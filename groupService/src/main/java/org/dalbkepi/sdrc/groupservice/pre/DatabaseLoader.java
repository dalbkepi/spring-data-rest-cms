package org.dalbkepi.sdrc.groupservice.pre;

import org.dalbkepi.sdrc.groupservice.entities.GroupEntity;
import org.dalbkepi.sdrc.groupservice.repositories.GroupEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final GroupEntityRepository repository;

	@Autowired
	public DatabaseLoader(GroupEntityRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new GroupEntity("Name one", "Description one"));
		this.repository.save(new GroupEntity("Name two", "Description two"));
		this.repository.save(new GroupEntity("Name three", "Description three"));
	}
}
