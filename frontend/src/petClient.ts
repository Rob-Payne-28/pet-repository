import {Pet} from "./Pet";
import axios from "axios";

const getPets = (): Promise<Pet[]> => {
    return axios.get('/api/pets');
}

export {getPets}