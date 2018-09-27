import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { BrunchDetailContainer } from 'AppContainers';
import { colors } from 'AppTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});

export class _BrunchDetailScene extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    disableSideBar: PropTypes.func,
    showSideBar: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.disableSideBar(true);
    this.props.showSideBar(false);
  }
  render() {
    const {
      navigator,
      disableSideBar,
      showSideBar
    } = this.props;
    return (
      <View style={styles.container}>
        <BrunchDetailContainer
          navigator={navigator}
          disableSideBar={disableSideBar}
          showSideBar={showSideBar}
        />
      </View>
    );
  }
}

import { sideBarContainer } from 'ReduxContainers';
export const BrunchDetailScene = sideBarContainer(_BrunchDetailScene);
