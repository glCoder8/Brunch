import { LocationActions } from 'ReduxActions';
import defaultState from './defaultState';
export const location = (state = defaultState.location, action) => {
  switch (action.type) {
    case LocationActions.SET_LOCATION:
    {
      const newState = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};
