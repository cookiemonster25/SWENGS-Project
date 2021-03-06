package swengs.therapiedb.model.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserImageRepository extends PagingAndSortingRepository<UserImage, Long>, JpaRepository<UserImage, Long>, CrudRepository<UserImage, Long> {
}
