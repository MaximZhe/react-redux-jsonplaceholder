import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTotalPageCount } from "../../utils/pageCount";

const initialState = {
  posts: [],
  filter: { sort: "", query: "" },
  pages: 0,
  page: 1,
  loading: false,
};

export const getPosts = createAsyncThunk(
  "datas/getPosts",
  async ({ limit, page }, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https:jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    dispatch(setPosts(response.data));
    const totalPosts = response.headers["x-total-count"];
    dispatch(setTotalCountPages(getTotalPageCount(totalPosts, limit)));
  }
);
export const datasSlice = createSlice({
  name: "datas",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSort: (state, action) => {
      state.filter.sort = action.payload;
    },
    setQuery: (state, action) => {
      state.filter.query = action.payload;
    },
    setTotalCountPages: (state, action) => {
      state.pages = action.payload;
    },
    setCountPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPosts.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(getPosts.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { setPosts, setSort, setQuery, setTotalCountPages, setCountPage } =
  datasSlice.actions;
export default datasSlice.reducer;
