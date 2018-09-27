import React, { PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BrunchDetail, TopNavBar } from 'AppComponents';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors, images, metrics } from 'AppTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navLeftIconContainer: {
    width: 50,
    flex: 1,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRightIconContainer: {
    flex: 1,
    marginVertical: 5,
    width: 50,
    justifyContent: 'center',
    marginRight: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  whiteText: {
    color: 'white'
  },
});

const leftNavbar = (
  <View style={styles.navLeftIconContainer}>
    <MaterialIcon name="arrow-back" size={25} color={colors.white} />
  </View>
);

const rightNavbar = (
  <View style={styles.navRightIconContainer}>
    <Text style={[{color: colors.persianGreen}, styles.boldText]}>Map</Text>
  </View>
);

const onLeft = (navigator) => {
  navigator.pop();
};

const onRight = () => {
  alert('Map');
}

export function BrunchDetailContainer({
  navigator,
  disableSideBar,
  showSideBar
}) {
  return (
    <View style={styles.container}>
      <TopNavBar
        centerLabel="Location"
        leftLabel={leftNavbar}
        rightLabel={rightNavbar}
        leftAction={() => onLeft(navigator)}
        rightAction={onRight}
      />
      <BrunchDetail
        navigator={navigator}
        disableSideBar={disableSideBar}
        showSideBar={showSideBar}
      />
    </View>
  );
}

BrunchDetailContainer.propTypes = {
  navigator: PropTypes.object,
  disableSideBar: PropTypes.func,
  showSideBar: PropTypes.func,
};
