import React, {useEffect, useState} from 'react';
import {Pet} from "./Pet";
import {getPets} from "./petClient";

const App = () => {
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        getPets().then(data => {
            setPets(data);
            }
        )
    }, [])
    return (
        <>
            <h1> Stinky's Kittens and Doggies too! </h1>
            {pets.map(pet => <div key={pet.id}> {pet.name} </div>)}
        </>
    )
}

export default App;
