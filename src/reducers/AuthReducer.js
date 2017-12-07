import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {email: '', password: '', user: null};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
        console.log('actions!');
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
        console.log('password changed!');
      case LOGIN_USER_SUCCESS:
        return { ...state, user: action.payload };

    default:
      return state;
  }
}
