import { ApiPlanetResponse, ApiResponse, Character, SpeciesResponse } from "../types/peopleType";
import { client } from "../utils/fetchClient";

export function getPeople() {
  return client.get<ApiResponse>('/people');
}

export function getPlanets() {
  return client.get<ApiPlanetResponse>('/planets');
}

export function getSpecies() {
  return client.get<SpeciesResponse>('/species');
}