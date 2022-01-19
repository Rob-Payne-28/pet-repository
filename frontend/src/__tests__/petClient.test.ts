import axios from 'axios';
import {Pet} from "../Pet";
import {getPets} from "../petClient";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('petClient', () => {
    describe('getPets', () => {

        it('should make a request for pets', async () => {
            const expectedPets = {data: [{id: 1, name: 'fluffy'}, {id: 2, name: 'baldy'}]}
            mockedAxios.get.mockResolvedValue({data: expectedPets})

            const returnedPets = await getPets();
            expect(returnedPets).toEqual(expectedPets);
            expect(mockedAxios.get).toHaveBeenCalledWith('/api/pets')
        });
    });
});


export {}