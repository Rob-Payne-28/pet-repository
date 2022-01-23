import React from 'react';
import {getPets} from "../petClient";
import {render, screen} from "@testing-library/react";
import App from "../App";

jest.mock('../petClient');
const mockGetPets = getPets as jest.MockedFunction<typeof getPets>;
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
});
