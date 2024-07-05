import { configureStore } from "@reduxjs/toolkit";
import { airingDataReducer , allAnimeReducer , popularReducer , upcomingReducer } from "../features/animeDataSlice";
import { animePageReducer } from "../features/animePageSlice";

export const store = configureStore({
    reducer: {
        allAnime: allAnimeReducer,
        popular: popularReducer,
        airingData: airingDataReducer,
        upcomingAnime: upcomingReducer,
        animePage: animePageReducer
    }
})