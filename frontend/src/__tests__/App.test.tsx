import React from 'react';
import {createPets, getPets} from "../petClient";
import {render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

jest.mock('../petClient');
const mockGetPets = getPets as jest.MockedFunction<typeof getPets>;
const mockCreatePets = createPets as jest.MockedFunction<typeof createPets>;

describe('Application', () => {
    it('should display pet information', async () => {
        const pets = [
            {name: "Bumbum", age: 10, type: 'Cat', wantsToBeOnlyPet: false},
            {name: "Cuddles", age: 8, type: 'Cat', wantsToBeOnlyPet: false}
        ];
        mockGetPets.mockResolvedValueOnce(pets);
        render(<App/>);

        expect(await screen.findByText(/Bumbum/i)).toBeInTheDocument();
        expect(screen.getByText(/Cuddles/i)).toBeInTheDocument();
    });

    it('should allow for the creation of pets', async () => {
        const pets = [
            {name: "Bumbum", age: 10, type: 'Cat', wantsToBeOnlyPet: false},
            {name: "Cuddles", age: 8, type: 'Cat', wantsToBeOnlyPet: false}
        ];
        mockGetPets.mockResolvedValueOnce(pets);
        render(<App/>);
        mockCreatePets.mockResolvedValueOnce({name: "Lucy", age: 2, type: "Dog", wantsToBeOnlyPet: true});

        userEvent.type(await screen.findByRole("textbox", {name: "Pet name:"}), "Lucy");

        userEvent.type(await screen.findByRole("textbox", {name: "Pet age:"}), "2");

        userEvent.type(await screen.findByRole("textbox", {name: "Pet type:"}), "Dog");

        userEvent.click(await screen.findByRole("checkbox", {name: "Would this pet prefer to be the only pet in the household?"}));

        userEvent.click(await screen.findByRole("button", {name: "Add Pet"}));

        expect(await screen.findByText(/Lucy/i)).toBeInTheDocument();
    });

    it('should not allow for the creation of pets with empty fields', async () => {
        const pets = [
            {name: "Bumbum", age: 10, type: 'Cat', wantsToBeOnlyPet: false},
            {name: "Cuddles", age: 8, type: 'Cat', wantsToBeOnlyPet: false}
        ];
        mockGetPets.mockResolvedValueOnce(pets);
        render(<App/>);
        mockCreatePets.mockResolvedValueOnce({name: "Lucy", age: 2, type: "Dog", wantsToBeOnlyPet: true});

        expect(await screen.findByRole("button", {name: "Add Pet"})).toHaveAttribute("disabled");

        userEvent.type(await screen.findByRole("textbox", {name: "Pet name:"}), "Lucy");
        expect(await screen.findByRole("button", {name: "Add Pet"})).toHaveAttribute("disabled");

        userEvent.type(await screen.findByRole("textbox", {name: "Pet age:"}), "2");
        expect(await screen.findByRole("button", {name: "Add Pet"})).toHaveAttribute("disabled");

        userEvent.type(await screen.findByRole("textbox", {name: "Pet type:"}), "Dog");
        expect(await screen.findByRole("button", {name: "Add Pet"})).not.toHaveAttribute("disabled");
    });
});
