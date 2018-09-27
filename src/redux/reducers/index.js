/**
 * @providesModule ReduxReducers
 */

import { combineReducers } from 'redux';
import { sidebar } from './sidebarReducers';
import { location } from './locationReducers';
export default combineReducers({
  sidebar,
  location
});
