package mil.army.futures.asitemplate.pet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PetController {

    @GetMapping("api/pets")
    public List<PetEntity>

}
