import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IMovie } from "../Interfaces/IMovie";

interface MovieSliceState {
  loading: boolean;
  error: boolean;
  movies?: IMovie[];
}

const initialMoviesState: MovieSliceState = {
  loading: false,
  error: false,
};

type Movie = {
  movieId: number;
  description: string;
  title: string;
  genreId: number;
  image: string;
  year: number;
};

export const getAllMovies = createAsyncThunk("movie/all", async (thunkAPI) => {
  try {
    const res = await axios.get(`http://localhost:8000/movie/all`);
    console.log("List of all movies: " + res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    clearMovies: (state) => {
      state.movies = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = false;
    });

    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { clearMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;
