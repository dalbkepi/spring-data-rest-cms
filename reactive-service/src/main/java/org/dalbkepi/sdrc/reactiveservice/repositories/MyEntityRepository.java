package org.dalbkepi.sdrc.reactiveservice.repositories;

import org.dalbkepi.sdrc.reactiveservice.entities.MyEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MyEntityRepository extends PagingAndSortingRepository<MyEntity, Long> {
}
