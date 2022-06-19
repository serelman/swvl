import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';

import { MAX_USERS } from 'constants/users';
import {
  getUsersRequest,
  selectAmountToShow,
  selectUserListLoading,
  showMoreUsers,
} from 'store/users';

import Button from 'components/Button/Button';

export default function LoadMoreButton() {
  const dispatch = useDispatch<AppDispatch>();
  const isListLoading = useSelector(selectUserListLoading);
  const amountToShow = useSelector(selectAmountToShow);

  const loadMoreItems = () => {
    dispatch(showMoreUsers());
    dispatch(getUsersRequest());
  };

  return amountToShow < MAX_USERS ? (
    <div className="load-more__wrapper">
      <Button onClick={loadMoreItems}>
        { !isListLoading ? (
          'Load More'
        ) : (
          'Loading...'
        )}
      </Button>
    </div>
  ) : null;
}
