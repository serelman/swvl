import React from 'react';
import { useSelector } from 'react-redux';

import { ROUTES } from 'constants/routes';

import {
  selectProfileData,
  selectProfileRequestStatusLoading,
} from 'store/profile';

import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const profile = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileRequestStatusLoading);
  const createdDate = new Date(profile?.created_at as string).toDateString();
  const navigate = useNavigate();

  return (
    <div className="user-profile">
      {
        isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <div className="user-profile__img">
              <img src={profile?.avatar_url} />
            </div>
            <div className="user-profile__info-field">
              Name: { profile?.name }
            </div>
            <div className="user-profile__info-field">
              Followers: { profile?.followers }
            </div>
            <div className="user-profile__info-field">
              Following: { profile?.following }
            </div>
            <div className="user-profile__info-field">
              Created at: { createdDate }
            </div>
            <div className="user-profile__info-field">
              Company: { profile?.company }
            </div>
            <div className="user-profile__info-field">
              Email: { profile?.email }
            </div>
            <div className="user-profile__info-field">
              Location: { profile?.location }
            </div>
            <div className="user-profile__info-field">
              Blog: {' '}
              <a
                className="user-profile__blog-link"
                href={profile?.blog}
                rel="noreferrer"
                target="_blank"
              >
                { profile?.blog }
              </a>
            </div>
            <div className="user-profile__info-field">
              Bio: { profile?.bio }
            </div>
            <Button onClick={() => navigate(ROUTES.HOME)}>
              Back
            </Button>
          </div>
        )
      }
    </div>
  );
}
