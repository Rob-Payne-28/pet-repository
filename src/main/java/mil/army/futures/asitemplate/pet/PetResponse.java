package mil.army.futures.asitemplate.pet;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PetResponse {
    private String name;
    private Integer age;
    private String type;
    private boolean wantsToBeOnlyPet;
}
