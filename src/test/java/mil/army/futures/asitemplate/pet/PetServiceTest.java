package mil.army.futures.asitemplate.pet;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PetServiceTest {
    @Mock
    PetJpaRepository petJpaRepository;

    @InjectMocks
    PetService petService;

    @Test
    public void shouldReturnAllPets() {
        var expectedPets = List.of(
                PetEntity.builder().age(1).name("Lisa").type("Cat").wantsToBeOnlyPet(false).build(),
                PetEntity.builder().age(40).name("Larry").type("Dog").wantsToBeOnlyPet(true).build()
        );
        when(petJpaRepository.findAll()).thenReturn(expectedPets);

        var returnedPets = petService.getAllPets();

        var expectedResponse = List.of(
                PetResponse.builder().age(1).name("Lisa").type("Cat").wantsToBeOnlyPet(false).build(),
                PetResponse.builder().age(40).name("Larry").type("Dog").wantsToBeOnlyPet(true).build()
        );

        assertThat(returnedPets).isEqualTo(expectedResponse);
    }

    @Test
    public void shouldCreateAPet() {
        var newPetEntity = PetEntity.builder()
                .name("Lisa")
                .age(1)
                .type("Cat")
                .wantsToBeOnlyPet(false)
                .build();

        var petEntity = PetEntity.builder()
                .age(newPetEntity.getAge())
                .name(newPetEntity.getName())
                .type(newPetEntity.getType())
                .wantsToBeOnlyPet(newPetEntity.isWantsToBeOnlyPet())
                .build();

        var newPetResponse = PetResponse.builder()
                .name(newPetEntity.getName())
                .age(newPetEntity.getAge())
                .type(newPetEntity.getType())
                .wantsToBeOnlyPet(newPetEntity.isWantsToBeOnlyPet())
                .build();

        var newPetRequest = PetRequest.builder()
                .name(newPetEntity.getName())
                .age(newPetEntity.getAge())
                .type(newPetEntity.getType())
                .wantsToBeOnlyPet(newPetEntity.isWantsToBeOnlyPet())
                .build();

        when(petJpaRepository.save(newPetEntity)).thenReturn(petEntity);

        var returnedEntity = petService.createPet(newPetRequest);

        assertThat(returnedEntity).isEqualTo(newPetResponse);
    }
}