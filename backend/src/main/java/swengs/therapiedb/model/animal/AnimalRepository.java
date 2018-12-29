package swengs.therapiedb.model.animal;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AnimalRepository extends PagingAndSortingRepository<Animal,Long> {
}
