import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainContainer } from 'AppContainers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class _MainScene extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    disableSideBar: PropTypes.func,
    showSideBar: PropTypes.func,
    setCurrentScene: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.disableSideBar(false);
    this.props.showSideBar(false);
    // this.props.showSideBar(true);
    this.props.setCurrentScene('MainScene');
  }
  render() {
    const {
      navigator,
      disableSideBar,
      showSideBar
    } = this.props;
    return (
      <View style={styles.container}>
        <MainContainer
          navigator={navigator}
          disableSideBar={disableSideBar}
          showSideBar={showSideBar}
        />
      </View>
    );
  }
}

import { sideBarContainer } from 'ReduxContainers';
export const MainScene = sideBarContainer(_MainScene);
