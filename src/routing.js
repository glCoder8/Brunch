import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  Navigator
} from 'react-native';
import {
  IntroScene,
  MainScene,
  BrunchDetailScene,
  MapScene,
  BrunchgramScene,
} from 'AppScenes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export class Router extends Component {
  static propTypes = {
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
      StatusBar.setHidden(false);
    } else {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      if (Platform.Version >= 21) {
        StatusBar.setHidden(true);
      } else {
        StatusBar.setHidden(true);
      }
    }
    this.navigationRef = null;
  }
  routingScene = (sceneName) => {
    debugger;
    switch (sceneName) {
      case 'IntroScene':
        this.navigationRef.resetTo(sceneName);
        break;
      case 'MainScene':
        this.navigationRef.resetTo(sceneName);
        break;
      case 'MapScene':
        this.navigationRef.resetTo(sceneName);
        break;
      case 'BrunchgramScene':
        this.navigationRef.resetTo(sceneName);
        break;
      default:
        break;
    }
  };
  renderScene = (route, navigator) => {
    const currentRoute = typeof route === 'string' ? { name: route } : route;
    switch (currentRoute.name) {
      case 'IntroScene':
        return (
          <IntroScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'MainScene':
        return (
          <MainScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'BrunchDetailScene':
        return (
          <BrunchDetailScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'MapScene':
        return (
          <MapScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'BrunchgramScene':
        return (
          <BrunchgramScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      default:
        return (
          <IntroScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
    }
  };
  renderConfig = (route, routeStack) => {
    const fadeAnimation = Navigator.SceneConfigs.FadeAndroid;
    const pushFromRight = Navigator.SceneConfigs.PushFromRight;
    const swipeFromRight = Navigator.SceneConfigs.HorizontalSwipeJump;

    const currentRoute = typeof route === 'string' ? { name: route } : route;
    switch (currentRoute.name) {
      case 'IntroScene':
        return fadeAnimation;
      case 'MainScene':
        return {
          ...swipeFromRight,
          gestures: {}
        };
      case 'MapScene':
        return {
          ...swipeFromRight,
          gestures: {}
        };
      case 'BrunchDetailScene':
        return {
          ...pushFromRight
        };
      case 'BrunchgramScene':
        return {
          ...swipeFromRight,
          gestures: {}
        };
      default:
        return pushFromRight;
    }
  };
  render() {
    return (
      <Navigator
        sceneStyle={styles.container}
        initialRoute={{ name: 'IntroScene' }}
        // initialRoute={{ name: 'BrunchgramScene' }}
        renderScene={this.renderScene}
        configureScene={this.renderConfig}
        ref={(ref) => this.navigationRef = ref}
      />
    );
  }
}
