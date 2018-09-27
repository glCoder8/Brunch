import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
export const metrics = {
  screenWidth: width,
  screenHeight: height,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  openMenuOffset: width * 5 / 7,
  navBarMarginHorizontal: 15,
  statusBarHeight: 20,
};