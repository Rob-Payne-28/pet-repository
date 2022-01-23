import React, {useEffect, useState} from 'react';
import {Pet} from "./Pet";
import {getPets} from "./petClient";
import {Card, Typography} from "@material-ui/core";

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
            <Typography variant={"h5"}> Stinky's Kittens and Doggies too! </Typography>
            {pets
                .map((pet, index) =>
                    <Card variant={"outlined"} key={index}>
                        Name: {pet.name}
                        <br/>
                        Age: {pet.age}
                        <br/>
                        Type: {pet.type}
                        <br/>
                        Only Pet Preference: {pet.wantsToBeOnlyPet.toString()}
                    </Card>)
            }
        </>
    )
}

export default App;
