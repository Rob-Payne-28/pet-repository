package mil.army.futures.asitemplate.pet;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PetRequest {
    private String name;
    private Integer age;
    private String type;
    private boolean wantsToBeOnlyPet;
}
