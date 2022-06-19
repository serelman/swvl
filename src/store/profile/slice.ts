import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile } from 'api/users';
import { AxiosError } from 'axios';
import { failureMessage, notFound } from 'constants/messages';

const ACTION_PREFIX = 'profile';

export interface ProfileData {
  name?: string;
  followers?: number | null;
  following?: number | null;
  created_at?: string;
  company?: string;
  email?: string;
  location?: string;
  blog?: string;
  bio?: string;
  avatar_url?: string;
}

export enum RequestStatus {
  idle = 'idle',
  error = 'error',
  success = 'success',
}

export interface UserProfileState {
  data?: ProfileData;
  requestStatus?: RequestStatus;
  errorMessage?: string;
}

const initialState: UserProfileState = {
  data: {
    name: '',
    followers: null,
    following: null,
    created_at: '',
    company: '',
    email: '',
    location: '',
    blog: '',
    bio: '',
    avatar_url: '',
  },
};

export const getUserProfileRequest = createAsyncThunk(
  `${ACTION_PREFIX}/getUserProfile`,
  (username: string, { rejectWithValue }) =>
    getUserProfile(username)
      .then(res => res.data)
      .catch((err: AxiosError) => rejectWithValue(err.response?.status)),
);


export const profileSlice = createSlice({
  name: ACTION_PREFIX,
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProfileRequest.pending.type]: (state) => {
      state.requestStatus = RequestStatus.idle;
    },
    [getUserProfileRequest.fulfilled.type]: (state, action: PayloadAction<ProfileData>) => {
      state.requestStatus = RequestStatus.success;
      state.data = action.payload;
    },
    [getUserProfileRequest.rejected.type]: (state, action) => {
      state.requestStatus = RequestStatus.error;
      state.errorMessage = failureMessage;
      if (action.payload === 404) {
        state.errorMessage = notFound;
      }
    },
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
