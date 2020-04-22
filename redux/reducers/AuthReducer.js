import { AUTHENTICATE } from '../actionTypes/authActionTypes';

const INITIAL_STATE = {
  loggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};
