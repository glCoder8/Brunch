import { createAction } from 'redux-actions';

export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
const showSideBar$ = createAction(SHOW_SIDEBAR);
export const showSideBar = (showValue) => (dispatch) => dispatch(showSideBar$(showValue));

export const DISABLE_SIDEBAR = 'DISABLE_SIDEBAR';
const disableSideBar$ = createAction(DISABLE_SIDEBAR);
export const disableSideBar =
  (disableValue) => (dispatch) => dispatch(disableSideBar$(disableValue));

export const SET_CURRENTSCENE = 'SET_CURRENTSCENE';
const setCurrentScene$ = createAction(SET_CURRENTSCENE);
export const setCurrentScene =
  (sceneName) => (dispatch) => dispatch(setCurrentScene$(sceneName));
