import {Pet} from "./Pet";

const getPets = (): Promise<Pet[]> => {
    return Promise.resolve([{id: 1, name: "Michael"}]);
}

export {getPets}