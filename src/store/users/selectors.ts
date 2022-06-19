import { createSelector } from '@reduxjs/toolkit';

import { UsersState } from './slice';
import { RootState } from 'store/index';
import { RequestStatus } from 'api/users';


export const selectUsersState = (state: RootState) => state.users;

export const selectUsers = createSelector(
  selectUsersState,
  (users: UsersState) => users.list,
);

export const selectUserListLoading = createSelector(
  selectUsersState,
  (users: UsersState) => users.requestStatus === RequestStatus.idle,
);

export const selectUserListError = createSelector(
  selectUsersState,
  (users: UsersState) => users.requestStatus === RequestStatus.error,
);

export const selectUserListErrorMessage = createSelector(
  selectUsersState,
  (users: UsersState) => users.errorMessage,
);

export const selectAmountToShow = createSelector(
  selectUsersState,
  (users: UsersState) => users.amountToShow,
);


