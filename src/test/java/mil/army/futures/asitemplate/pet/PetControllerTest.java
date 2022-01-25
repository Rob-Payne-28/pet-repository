package mil.army.futures.asitemplate.pet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PetController.class)
@ExtendWith(MockitoExtension.class)
class PetControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    PetService petService;

    @Test
    public void shouldReturnListOfPets() throws Exception {
        var expectedPets = List.of(
                PetResponse.builder().age(1).name("Lisa").type("Cat").wantsToBeOnlyPet(false).build(),
                PetResponse.builder().age(40).name("Larry").type("Dog").wantsToBeOnlyPet(true).build()
        );

        when(petService.getAllPets()).thenReturn(expectedPets);

        mockMvc.perform(get("/api/pets"))
                .andExpect(status().isOk())
                .andExpect(content().string(objectMapper.writeValueAsString(expectedPets)));
    }

    @Test
    public void shouldCreateANewPet() throws Exception {
        var petResponse = PetResponse.builder().name("Pet name").age(4).type("Dog").wantsToBeOnlyPet(true).build();
        var petRequest = PetRequest.builder().name("Pet name").age(4).type("Dog").wantsToBeOnlyPet(true).build();

        when(petService.createPet(petRequest)).thenReturn(petResponse);

        mockMvc.perform(post("/api/pets")
                .contentType(MediaType.APPLICATION_JSON)
                .content(petRequest.toString()))
                .andExpect(content().json(petResponse.toString()));
    }
}