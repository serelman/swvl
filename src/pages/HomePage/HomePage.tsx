import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { getUsersRequest, selectUserListError } from 'store/users';

import MainLayout from 'layouts/MainLayout';
import UserList from 'components/UserList/UserList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const isError = useSelector(selectUserListError);
  const errorMessage = useSelector(selectUserListError);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  return (
    <MainLayout>
      { isError && (
        <ErrorMessage>
          { errorMessage }
        </ErrorMessage>
      )}
      {
        !isError && (
          <>
            <UserList />
            <LoadMoreButton />
          </>
        )
      }
    </MainLayout>
  );
}
