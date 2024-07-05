import { createSlice } from "@reduxjs/toolkit";

export const animePageSlice = createSlice({
  name: "animePage",
  initialState: [],
  reducers: {
    setAnimePageData: (state, action) => {
      state[0] = action.payload;
    },

    setCharactersData: (state,action)=>{
      state[1] = action.payload;
    }
  },
});

export const { setAnimePageData , setCharactersData } = animePageSlice.actions;
export const animePageReducer = animePageSlice.reducer;