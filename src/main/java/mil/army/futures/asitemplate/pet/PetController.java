package mil.army.futures.asitemplate.pet;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class PetController {
    PetService petService;

    @GetMapping("/api/pets")
    public List<PetResponse> getPets() {
        return petService.getAllPets();
    }

    @PostMapping("/api/pets")
    public PetResponse createPets(@RequestBody PetRequest newPet) {
        return petService.createPet(newPet);
    }

}
