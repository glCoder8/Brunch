import { StyleSheet } from 'react-native';
import { metrics } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined,
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  },
  facebookLogin: {
    position: 'absolute',
    bottom: 30,
    left: metrics.screenWidth * .05
  },
  facebookLoginImage: {
    width: metrics.screenWidth * .9
  }
});