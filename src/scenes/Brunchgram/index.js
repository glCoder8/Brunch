import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { BrunchgramContainer } from 'AppContainers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class _BrunchgramScene extends Component {
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
    this.props.setCurrentScene('BrunchgramScene');
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
        <BrunchgramContainer
          navigator={navigator}
          disableSideBar={disableSideBar}
          showSideBar={showSideBar}
          location={location}
        />
      </View>
    );
  }
}

import { sideBarContainer } from 'ReduxContainers';
export const BrunchgramScene = sideBarContainer(_BrunchgramScene);