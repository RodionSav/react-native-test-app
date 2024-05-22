import { createSlice } from "@reduxjs/toolkit"

type FavouriteState = {
  MenItems: number,
  WomenItems: number,
  OtherItems: number
}

const initialState: FavouriteState = {
  MenItems: 0,
  WomenItems: 0,
  OtherItems: 0
}

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    increaseMenItems: (state) => {
      state.MenItems += 1;
    },
    increaseWomenItems: (state) => {
      state.WomenItems += 1;
    },
    increaseOtherItems: (state) => {
      state.OtherItems += 1;
    },
    decreaseMenItems: (state) => {
      state.MenItems -= 1;
    },
    decreaseWomenItems: (state) => {
      state.WomenItems -= 1;
    },
    decreaseOtherItems: (state) => {
      state.OtherItems -= 1;
    },
    resetItems: (state) => {
      state.MenItems = 0;
      state.WomenItems = 0;
      state.OtherItems = 0;
    }
  }
});

export const {
  increaseMenItems,
  increaseWomenItems,
  increaseOtherItems,
  decreaseMenItems,
  decreaseWomenItems,
  decreaseOtherItems,
  resetItems
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
