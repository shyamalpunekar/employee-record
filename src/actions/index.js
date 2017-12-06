import { Email_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
      type: 'Email_CHANGED',
      payload: text
  };
};
