import React, { PropTypes } from 'react';
import { View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Text, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.navBarHeight,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'ios' ? metrics.statusBarHeight : 5,
    paddingBottom: Platform.OS === 'ios' ? 0 : 5
  },
  left: {
  },
  right: {
    // textAlign: 'right',
    // marginRight: NAVBAR_MARGIN_HORIZONTAL
  },
  imageContainer: {
    width: 10,
    resizeMode: 'contain',
    marginLeft: metrics.navBarMarginHorizontal
  },
  rightContainer: {
    width: 10,
    marginLeft: metrics.navBarMarginHorizontal
  }
});

const renderLeftSide = (label, action, sideFontSize, color) => (
  <TouchableOpacity onPress={action} >
    {
      typeof label === 'object' ? label :
        <Text style={[styles.left, { color, fontSize: sideFontSize }]} >
          {label}
        </Text>
    }
  </TouchableOpacity>
);

const renderCenter = (centerLabel, centerFontSize, color) => (
  <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
    {
      typeof centerLabel === 'object' ? centerLabel :
        <Text style={[styles.left, { color, fontSize: centerFontSize }]}>
          {centerLabel}
        </Text>
    }
  </View>
);
const renderRightSide = (label, action, sideFontSize, color) => {
  const TouchComponent = action ?  TouchableOpacity : TouchableWithoutFeedback;
  return (
    <TouchComponent onPress={action}>
      {
        typeof label === 'object' ? label :
          <Text style={[styles.right, { color, fontSize: sideFontSize }]}>
            {label}
          </Text>
      }
    </TouchComponent>
  );
}
export const TopNavBar = ({
  leftLabel,
  rightLabel,
  centerLabel,
  leftAction,
  rightAction,
  backgroundColor,
  sideFontSize,
  centerFontSize,
  color,
  wrapStyle,
}) => (
  <View style={[wrapStyle, styles.container, { backgroundColor }]}>
    {leftLabel ? renderLeftSide(leftLabel, leftAction, sideFontSize, color) : <View /> }
    {centerLabel ? renderCenter(centerLabel, centerFontSize, color) : <View /> }
    {rightLabel ? renderRightSide(rightLabel, rightAction, sideFontSize, color) : <View /> }
  </View>
);

TopNavBar.propTypes = {
  leftLabel: PropTypes.any,
  rightLabel: PropTypes.any,
  centerLabel: PropTypes.any,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  backgroundColor: PropTypes.string,
  sideFontSize: PropTypes.number,
  centerFontSize: PropTypes.number,
  color: PropTypes.string,
  sideWidth: PropTypes.number,
  wrapStyle: View.propTypes.style,
};

TopNavBar.defaultProps = {
  leftLabel: <FontAwesome name="bars" size={25} color={colors.white} />,
  backgroundColor: colors.persianGreen,
  sideFontSize: 15,
  centerFontSize: 20,
  color: 'white',
  sideWidth: 80,
  rightLabel: <View style={styles.rightContainer} />
};
