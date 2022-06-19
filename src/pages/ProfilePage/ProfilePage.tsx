import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch } from 'store';
import {
  getUserProfileRequest,
  selectProfileErrorMessage,
  selectProfileRequestStatusError,
} from 'store/profile';

import MainLayout from 'layouts/MainLayout';
import UserProfile from 'components/UserProfile/UserProfile';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function ProfilePage() {
  const { username }  = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const isError = useSelector(selectProfileRequestStatusError);
  const errorMessage = useSelector(selectProfileErrorMessage);

  useEffect(() => {
    if (username) {
      dispatch(getUserProfileRequest(username));
    }
  }, [dispatch, username]);

  return (
    <MainLayout>
      {
        isError && (
          <ErrorMessage>
            { errorMessage }
          </ErrorMessage>
        )
      }
      {
        !isError && (
          <UserProfile />
        )
      }
    </MainLayout>
  );
}
