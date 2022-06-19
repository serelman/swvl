import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers, RequestStatus } from 'api/users';
import { AxiosError } from 'axios';

const ACTION_PREFIX = 'users';

export interface UserItem {
  login?: string;
  html_url?: string;
  avatar_url?: string;
}

export type UserList = Array<UserItem>;

export interface UsersState {
  list: UserList;
  requestStatus?: RequestStatus;
  amountToShow: number;
  errorMessage?: string;
}

const initialState: UsersState = {
  list: [],
  amountToShow: 10,
};

export const getUsersRequest = createAsyncThunk<unknown, void, { state: { users: UsersState } }>(
  `${ACTION_PREFIX}/getUsers`,
  (_, { getState, rejectWithValue }) => {
    const { amountToShow } = getState().users;

    return getUsers(amountToShow)
      .then(res => res.data)
      .catch((err: AxiosError) => rejectWithValue(err.response?.status));
  },
);


export const usersSlice = createSlice({
  name: ACTION_PREFIX,
  initialState,
  reducers: {
    showMoreUsers: (state: UsersState) => {
      state.amountToShow = state.amountToShow + 10;
    },
  },
  extraReducers: {
    [getUsersRequest.pending.type]: (state) => {
      state.requestStatus = RequestStatus.idle;
    },
    [getUsersRequest.fulfilled.type]: (state, action: PayloadAction<UserList>) => {
      state.requestStatus = RequestStatus.success;
      state.list = action.payload;
    },
    [getUsersRequest.rejected.type]: (state) => {
      state.requestStatus = RequestStatus.error;
    },
  },
});

export const {
  showMoreUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
