import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../Interfaces/IUser";

interface UserSliceState {
  loading: boolean;
  error: boolean;
  user?: IUser;
}

const initialUserState: UserSliceState = {
  loading: false,
  error: false,
};

type Login = {
    username: string,
    password: string
}

export const loginUser = createAsyncThunk(
    "user/login", 
    async (login: Login, thunkAPI) => {
    try {
      const res = await axios.post(`http://localhost:8000/user/login`, login);
      console.log("User: " + res.data);
      return {
            userId: res.data.userId,
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            username: res.data.username,
            password: res.data.password
      };
    } catch (e) {
      console.log(e);
    }
  });

export const UserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    clearUser: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { clearUser } = UserSlice.actions;

export default UserSlice.reducer;
