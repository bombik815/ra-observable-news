import { createSlice } from "@reduxjs/toolkit";

export const newsReducer = createSlice({
  name: 'newsReducer',
  initialState: {
    news: [],
    newsGet: false,
    id: null,
    loading: false,
    error: null
  },
  reducers: {
    fetchGetRequest: (state, action) => {
      state.loading = true;
    },
    fetchGetSuccess: (state, action) => {
      state.news = action.payload;
      if (action.payload.length > 0) {
        state.newsGet = true;
      };
      state.loading = false;
    },
    fetchGetMoreRequest: (state, action) => {
      state.id = action.payload;
      state.loading = true;
    },
    fetchGetMoreSuccess: (state, action) => {
      state.news = [...state.news, ...action.payload];
      if (action.payload.length === 0) {
        state.newsGet = false;
      };
      state.id = null;
      state.loading = false;
    }
  }
});

export const {
  fetchGetRequest,
  fetchGetSuccess,
  fetchGetMoreRequest,
  fetchGetMoreSuccess
} = newsReducer.actions;

export default newsReducer.reducer;