package mil.army.futures.asitemplate.pet;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PetJpaRepository extends JpaRepository<PetEntity, Long> {
}
