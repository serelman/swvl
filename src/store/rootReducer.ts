import usersReducer from './users/slice';
import selectedProfileReducer from './profile/slice';

export const rootReducer = {
  users: usersReducer,
  selectedProfile: selectedProfileReducer,
};
