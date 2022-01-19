package mil.army.futures.asitemplate.pet;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PetService {
    PetJpaRepository petJpaRepository;

    public List<PetEntity> getAllPets() {
        return petJpaRepository.findAll();
    }
}
