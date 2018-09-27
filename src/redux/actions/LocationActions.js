import { createAction } from 'redux-actions';
export const SET_LOCATION = 'SET_LOCATION';
const setLocation$ = createAction(SET_LOCATION);
export const setLocation = (location) => (dispatch) => dispatch(setLocation$(location));
