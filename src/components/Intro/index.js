import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { default as styles } from './styles';
import { metrics, images } from '../../theme';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export class Intro extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      anim: new Animated.Value(0),
      buttonWidth: 0,
      buttonHeight: 0,
    };
    this.onImageLoaded = this.onImageLoaded.bind(this);
  }
  componentDidMount() {
    Animated.timing(this.state.anim, {toValue: 3000, duration: 3000}).start();
  }
  onLoginFB = () => {
    this.props.navigator.resetTo('MainScene');
  };
  onPressSkip = () => {
    alert('skipped');
  };

  render() {
    const {buttonWidth, buttonHeight} = this.state;
    return (
      <Image
        style={styles.container}
        source={images.loginBg}>
        <StatusBar barStyle="default" />
        <TouchableOpacity
          accessibilityLabel="Skip login"
          accessibilityTraits="button"
          style={styles.skip}
          onPress={this.onPressSkip}>
          <Animated.Image
            style={this.fadeIn(2000)}
            source={images.skipIcon}
          />
        </TouchableOpacity>

        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLoginFinished={() => alert("logout.")} />

      </Image>
    )
  }
// <TouchableOpacity
// accessibilityLabel="Facebook login"
// accessibilityTraits="button"
// style={styles.facebookLogin}
// onPress={this.onLoginFB}>
//
// <Animated.Image
// resizeMode={"contain"}
// style={[
//   this.fadeIn(2000),
//   styles.facebookLoginImage, buttonWidth > 0 ? { height: buttonHeight / buttonWidth * metrics.screenWidth * 0.9 } : {}]}
// source={images.facebookButton}
// onLoad={this.onImageLoaded}
// />
//
// </TouchableOpacity>
  onImageLoaded(data) {
    const {buttonWidth, buttonHeight} = this.state;
    try {
      let bwidth = data.nativeEvent.source.width;
      let bheight = data.nativeEvent.source.height;
      this.setState({ buttonWidth: bwidth, buttonHeight: bheight });
    } catch (e) {

    }
  }

  fadeIn(delay, from = 0) {
    const {anim} = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        })
      }]
    }
  }
}
