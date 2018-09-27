import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LocationActions } from 'ReduxActions';
import { createSelector } from 'reselect';

export const location$ = (state) => state.location;
const selector$ = createSelector(location$,
  (location) => ({
    location
  })
);

const mapStateToProps = (state) => ({ ...selector$(state) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...LocationActions }, dispatch);

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component);
