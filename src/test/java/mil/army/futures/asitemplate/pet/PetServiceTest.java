package mil.army.futures.asitemplate.pet;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PetServiceTest {
    @Mock
    PetJpaRepository petJpaRepository;

    @InjectMocks
    PetService petService;

    @Test
    public void shouldReturnAllPets() {
        var expectedPets = List.of(
                new PetEntity(1L, "lisa"),
                new PetEntity(2L, "larry"));
        when(petJpaRepository.findAll()).thenReturn(expectedPets);

        var returnedPets = petService.getAllPets();

        assertThat(returnedPets).isEqualTo(expectedPets);
    }

}