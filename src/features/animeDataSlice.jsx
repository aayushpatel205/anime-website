import { createSlice } from "@reduxjs/toolkit";

export const allAnimeSlice = createSlice({
  name: "allAnime",
  initialState: [],
  reducers: {
    setAllData: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const airingAnimeSlice = createSlice({
  name: "airingAnime",
  initialState: [],
  reducers: {
    setAiringData: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const popularAnimeSlice = createSlice({
  name: "popularAnime",
  initialState: [],
  reducers: {
    setPopularData: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const upcomingAnimeSlice = createSlice({
  name: "upcomingAnime",
  initialState: [],
  reducers: {
    setUpcomingData: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const { setAllData } = allAnimeSlice.actions;
export const allAnimeReducer = allAnimeSlice.reducer;

export const { setAiringData } = airingAnimeSlice.actions;
export const airingDataReducer = airingAnimeSlice.reducer;

export const { setPopularData } = popularAnimeSlice.actions;
export const popularReducer = popularAnimeSlice.reducer;

export const {setUpcomingData} = upcomingAnimeSlice.actions;
export const upcomingReducer = upcomingAnimeSlice.reducer;
