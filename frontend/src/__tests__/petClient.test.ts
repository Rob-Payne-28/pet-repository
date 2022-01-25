import axios from 'axios';
import {getPets, createPets} from "../petClient";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('petClient', () => {
    describe('getPets', () => {

        it('should make a request for pets', async () => {
            const expectedPets = {data: [{name: 'fluffy', age: 4, type: 'cat', wantsToBeOnlyPet: true}, {name: 'baldy', age: 10, type: 'dog', wantsToBeOnlyPet: false}]}
            mockedAxios.get.mockResolvedValue({data: expectedPets})

            const returnedPets = await getPets();
            expect(returnedPets).toEqual(expectedPets);
            expect(mockedAxios.get).toHaveBeenCalledWith('/api/pets')
        });
    });

    describe('createPets', () => {
       it('should make a request to create a pet', async () => {
           const newPetResponse = {name: 'Prancer', age: 10, type: 'Dog', wantsToBeOnlyPet: true};
           mockedAxios.post.mockResolvedValueOnce({data: newPetResponse});

           const returnedValue = await createPets(newPetResponse);
           expect(returnedValue).toEqual(newPetResponse);
       });
    });
});


export {}