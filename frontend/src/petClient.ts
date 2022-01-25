import {Pet} from "./Pet";
import axios from "axios";

export const getPets = async (): Promise<Pet[]> => {
    const response = await axios.get('/api/pets');
    return response.data;
}

export const createPets = async (pet: Pet): Promise<Pet> => {
    const response = await axios.post('/api/pets', {name: pet.name, age: pet.age, type: pet.type, wantsToBeOnlyPet: pet.wantsToBeOnlyPet});
    return response.data;
}