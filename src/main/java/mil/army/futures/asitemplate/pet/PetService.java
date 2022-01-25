package mil.army.futures.asitemplate.pet;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class PetService {
    PetJpaRepository petJpaRepository;

    public List<PetResponse> getAllPets() {
        var petEntities = petJpaRepository.findAll();
        var listOfResponse = new ArrayList<PetResponse>();

        for (PetEntity entity:petEntities) {
            listOfResponse.add(
                    PetResponse.builder()
                            .name(entity.getName())
                            .age(entity.getAge())
                            .wantsToBeOnlyPet(entity.isWantsToBeOnlyPet())
                            .type(entity.getType())
                            .build());
        }
        return listOfResponse;
    }

    public PetResponse createPet(PetRequest petRequest) {
        var returnedEntity = petJpaRepository.save(
                PetEntity.builder()
                .name(petRequest.getName())
                .age(petRequest.getAge())
                .type(petRequest.getType())
                .wantsToBeOnlyPet(petRequest.isWantsToBeOnlyPet())
                .build()
        );

        var newResponse = PetResponse.builder()
                .name(returnedEntity.getName())
                .age(returnedEntity.getAge())
                .type(returnedEntity.getType())
                .wantsToBeOnlyPet(returnedEntity.isWantsToBeOnlyPet())
                .build();

        return newResponse;
    }
}
