import { configureStore } from '@reduxjs/toolkit';
import moivedetailsSlice from '../slice/moivedetails.Slice';
import movieSlice from '../slice/movieSlice';
import userSlice from '../slice/userSlice';

 export default configureStore({
 reducer: {
      user : userSlice,
      movieDetail: moivedetailsSlice,
      movie: movieSlice 
 }
})

