import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { RequestStatus, UserProfileState } from 'store/profile/slice';

export const selectProfileState = (state: RootState) => state.selectedProfile;

export const selectProfileData = createSelector(
  selectProfileState,
  (profile: UserProfileState) => profile.data,
);

export const selectProfileRequestStatusLoading = createSelector(
  selectProfileState,
  (profile: UserProfileState) => profile.requestStatus === RequestStatus.idle,
);

export const selectProfileErrorMessage = createSelector(
  selectProfileState,
  (profile: UserProfileState) => profile.errorMessage,
);

export const selectProfileRequestStatusError = createSelector(
  selectProfileState,
  (profile: UserProfileState) => profile.requestStatus === RequestStatus.error,
);
