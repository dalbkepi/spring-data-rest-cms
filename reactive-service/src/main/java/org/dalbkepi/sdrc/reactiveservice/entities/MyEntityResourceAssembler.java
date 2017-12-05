package org.dalbkepi.sdrc.reactiveservice.entities;

import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

@Component
public class MyEntityResourceAssembler implements ResourceAssembler<MyEntity, Resource<MyEntity>>
{

	@Override
	public Resource<MyEntity> toResource(MyEntity myEntity) {
		return new Resource<>(myEntity);
	}

}
