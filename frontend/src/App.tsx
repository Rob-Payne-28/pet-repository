import React, {useEffect, useState} from 'react';
import {Pet} from "./Pet";
import {createPets, getPets} from "./petClient";
import {Button, Card, Checkbox, Input, Select, Typography} from "@material-ui/core";

const App = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [type, setType] = useState("");
    const [onlyPet, setOnlyPet] = useState(false);

    useEffect(() => {
        getPets().then(data => {
            setPets(data);
            }
        )
    }, [])

    async function handleAddNewPet() {
        if (name && age && type) {
            const newPetInfo: Pet = {name: name, age: age, type: type, wantsToBeOnlyPet: onlyPet}
            const newPet : Pet = await createPets(newPetInfo);
            setPets([...pets, newPet]);
        }
    }

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
            <Card>
                <label htmlFor="new-pet-name">Pet name:</label>
                <Input
                    id="new-pet-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="new-pet-age">Pet age:</label>
                <Input
                    id="new-pet-age"
                    value={age}
                    onChange={(event) => setAge(Number(event.target.value))}
                />
                <label htmlFor="new-pet-type">Pet type:</label>
                <Input
                    id="new-pet-type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                />
                <label htmlFor="new-pet-preference">Would this pet prefer to be the only pet in the household?</label>
                <Checkbox
                    id="new-pet-preference"
                    value={onlyPet}
                    onClick={() => setOnlyPet(!onlyPet)}
                />
                <Button
                    disabled={!type || !name || !age || age == 0}
                    onClick={handleAddNewPet}
                >Add Pet</Button>
            </Card>
        </>
    )
}

export default App;
