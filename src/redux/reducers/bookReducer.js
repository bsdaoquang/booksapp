import {createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
  },
  reducers: {
    addBooks: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const {addBooks} = bookSlice.actions;

export const bookSelector = state => state.bookReducer.data;
