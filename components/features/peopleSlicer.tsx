import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ApiPlanetResponse, ApiResponse, Character, Planet, SpeciesResponse } from "../../types/peopleType"
import { getPeople, getPlanets, getSpecies } from "../../api/people"

type PeopleState = {
  items: ApiResponse;
  itemsPlanets: ApiPlanetResponse;
  itemsSpecies: SpeciesResponse;
  loaded: boolean;
  hasError: string | null;
};

const initialState: PeopleState = {
  items: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  itemsPlanets: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  itemsSpecies: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loaded: true,
  hasError: null,
};

export const peopleInit = createAsyncThunk<ApiResponse>('people/fetch', getPeople);

export const planetInit = createAsyncThunk<ApiPlanetResponse>('planets/fetch', getPlanets);

export const speciesInit = createAsyncThunk<SpeciesResponse>('species/fetch', getSpecies);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(peopleInit.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(peopleInit.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loaded = false;
    });
    builder.addCase(peopleInit.rejected, (state) => {
      state.hasError = 'Error';
    });
    builder.addCase(planetInit.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(planetInit.fulfilled, (state, action) => {
      state.itemsPlanets = action.payload;
      state.loaded = false;
    })
    builder.addCase(planetInit.rejected, (state) => {
      state.hasError = 'Error';
    });
    builder.addCase(speciesInit.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(speciesInit.fulfilled, (state, action) => {
      state.itemsSpecies = action.payload;
      state.loaded = false;
    })
    builder.addCase(speciesInit.rejected, (state) => {
      state.hasError = 'Error';
    });
  },
});

export default peopleSlice.reducer;
