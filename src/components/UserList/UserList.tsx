import React from 'react';
import { useSelector } from 'react-redux';

import { selectUsers } from 'store/users';

import UserItem from 'components/UserItem/UserItem';

export default function UserList() {
  const users = useSelector(selectUsers);

  return (
    <div className="user-list">
      { users.map((user, key) => (
        <UserItem
          key={key}
          {...user}
        />
      ))}
    </div>
  );
}
