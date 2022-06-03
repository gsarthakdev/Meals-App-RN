//create a so called "slice" - redux toolkit feature for defining some state, data, 
//and some actions that should be able to change that data. 

import {createSlice} from "@reduxjs/toolkit"; 

const favoritesSlice = createSlice({
  name: 'favorites', 
  initialState: {
    ids: []
  },
  reducers: { //"reducers" are functions that are used to change state
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    }, 
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    }
  }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;