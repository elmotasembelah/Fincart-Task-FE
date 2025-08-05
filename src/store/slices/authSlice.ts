import type { User } from "@/types/user.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  isAuthLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isAuthLoading = action.payload;
    },
  },
});

export const { setUser, logout, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
