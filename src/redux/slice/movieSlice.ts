import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      originals : [] ,
      trending : [],
      recommend: [],
      new: []
}

const Movie = createSlice({
      name : "movie" ,
      initialState,
      reducers: {
        setMovieOriginals: (state , action) => {
               state.originals = action.payload.list;
        },
        setMovieTrending: (state , action) => {
            state.trending = action.payload.list;
        },
        setMovieRecommend: (state , action) => {
            state.recommend = action.payload.list;
        },
        setMovieNew: (state , action) => {
            state.new = action.payload.list;
        },


      }
})

export const {setMovieNew , setMovieOriginals , setMovieTrending ,setMovieRecommend}  = Movie.actions ;

export default Movie.reducer;