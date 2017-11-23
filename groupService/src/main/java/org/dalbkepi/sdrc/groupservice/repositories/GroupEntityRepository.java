package org.dalbkepi.sdrc.groupservice.repositories;

import org.dalbkepi.sdrc.groupservice.entities.GroupEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GroupEntityRepository extends PagingAndSortingRepository<GroupEntity, Long>
{
}
