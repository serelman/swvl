import makeRequest, { Response } from 'api/index';
import { UserList } from 'store/users';

export enum RequestStatus {
  idle = 'idle',
  error = 'error',
  success = 'success',
}

export const getUsers = (amount: number): Response<UserList> => makeRequest({
  method: 'get',
  url: `/users?per_page=${amount}`,
});

export const getUserProfile = (username: string): Response<UserList> => makeRequest({
  method: 'get',
  url: `/users/${username}`,
});
