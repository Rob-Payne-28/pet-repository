import {Pet} from "./Pet";
import axios from "axios";

const getPets = async (): Promise<Pet[]> => {
    const response = await axios.get('/api/pets');
    return response.data;
}

export {getPets}