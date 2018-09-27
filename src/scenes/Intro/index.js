import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { IntroContainer } from 'AppContainers';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export class IntroScene extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    // disableSideBar: PropTypes.func,
    // showSideBar: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <IntroContainer navigator={navigator} />
      </View>
    );
  }
}

// import { sideBarContainer } from 'ReduxContainers';
// export const IntroScene = sideBarContainer(_IntroScene);
