import { AUTHENTICATE } from '../actionTypes/authActionTypes';

const setLoggedIn = () => ({
  type: AUTHENTICATE,
  payload: true,
});

export { setLoggedIn };
