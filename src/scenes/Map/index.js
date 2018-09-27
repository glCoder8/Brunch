import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { MapContainer } from 'AppContainers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class _MapScene extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    disableSideBar: PropTypes.func,
    showSideBar: PropTypes.func,
    setCurrentScene: PropTypes.func,
    location: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.disableSideBar(false);
    this.props.showSideBar(false);
    this.props.setCurrentScene('MainScene');
  }
  render() {
    const {
      navigator,
      disableSideBar,
      showSideBar,
      location
    } = this.props;
    return (
      <View style={styles.container}>
        <MapContainer
          navigator={navigator}
          disableSideBar={disableSideBar}
          showSideBar={showSideBar}
          location={location}
        />
      </View>
    );
  }
}

import { sideBarContainer, locationContainer } from 'ReduxContainers';
const __MapScene = sideBarContainer(_MapScene);
export const MapScene = locationContainer(__MapScene);
