import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import {Map, TopNavBar} from 'AppComponents';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, images, metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navLeftIconContainer: {
    width: 50,
    flex: 1,
    marginVertical: 5,
    justifyContent: 'center',
    marginLeft: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center'
  },
  navRightIconContainer: {
    width: 60,
    justifyContent: 'center',
    // backgroundColor: colors.white,
    marginRight: 10,
    height: 25,
    alignItems: 'center',
    borderRadius: 5,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  whiteText: {
    color: 'white'
  }
});

const leftNavbar = (
  <View style={styles.navLeftIconContainer}>
    <FontAwesome name="bars" size={22} color={colors.white}/>
  </View>
);

const rightNavbar = (
  <View style={styles.navRightIconContainer}>
    <Text style={[styles.whiteText, styles.boldText]}>
      Filter
    </Text>
  </View>
);

const centerNavbar = (
  <View />
);

const onMenu = (showSideBar) => {
  showSideBar(true);
};

const onFilter = () => {
  alert('Filtrar');
};

export function MapContainer({
  navigator,
  disableSideBar,
  showSideBar,
  location,
}) {
  return (
    <View style={styles.container}>
      <TopNavBar
        centerLabel={centerNavbar}
        leftAction={() => onMenu(showSideBar)}
        leftLabel={leftNavbar}
        rightLabel={rightNavbar}
        rightAction={onFilter}
      />

      <Map
        navigator={navigator}
        disableSideBar={disableSideBar}
        showSideBar={showSideBar}
        location={location}
      />
    </View>
  );
}

MapContainer.propTypes = {
  navigator: PropTypes.object,
  disableSideBar: PropTypes.func,
  showSideBar: PropTypes.func,
  location: PropTypes.object
};
