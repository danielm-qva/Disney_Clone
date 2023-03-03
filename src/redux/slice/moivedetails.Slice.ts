
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundImg: "",
    cardImg: "",
    description: "",
    subTitle: "",
    title: "",
    titleImg: "",
    type: ""
}

const MovideDetails = createSlice({
    name: "movieDetails",
    initialState,
    reducers: {
        setDetailMovie: (state, action) => {
            state.backgroundImg = action.payload.backgroundImg;
            state.cardImg = action.payload.cardImg;
            state.description = action.payload.description;
            state.subTitle = action.payload.subTitle;
            state.title = action.payload.title;
            state.titleImg = action.payload.titleImg;
            state.type = action.payload.type;
        },
        deleteDetailsMovie: (state) => {
            state.backgroundImg = '';
            state.cardImg = '';
            state.description = '';
            state.subTitle = '';
            state.title = '';
            state.titleImg = '';
            state.type = '';
        }
    }
})

export const { setDetailMovie , deleteDetailsMovie } = MovideDetails.actions;

export default MovideDetails.reducer;