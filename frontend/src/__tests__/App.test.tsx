import React from 'react';
import {getPets} from "../petClient";
import {render, screen} from "@testing-library/react";
import App from "../App";

jest.mock('../petClient');
const mockGetPets = getPets as jest.MockedFunction<typeof getPets>;

it('should display names of pets', async () => {
  const pets = [{id: 1, name: "Bumbum"}, {id: 2, name: "Cuddles"}];
  mockGetPets.mockResolvedValue(pets);

  render(<App/>);

  expect(await screen.findByText("Bumbum")).toBeVisible();
  expect(await screen.findByText("Cuddles")).toBeVisible();
});

