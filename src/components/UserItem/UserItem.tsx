import React from 'react';

import { ROUTES } from 'constants/routes';
import { UserItem } from 'store/users';
import { Link } from 'react-router-dom';

export default function UserItemComponent({
  login,
  html_url,
  avatar_url,
}: UserItem) {

  return (
    <Link
      className="user-list__item"
      to={`${ROUTES.USER}/${login}`}
    >
      <div className="user-list__item-content">
        <div className="user-list__item-img">
          <img src={avatar_url}  alt={login}/>
        </div>
        <div className="user-list__item-info">
          <div className="user-list__item-username">
            Username: { login }
          </div>
          <div>
            Profile link: { html_url }
          </div>
        </div>
      </div>
    </Link>
  );
}
