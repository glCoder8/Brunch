import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ListView,
  Text
} from 'react-native';
import { default as styles } from './styles';
import { colors, images, metrics } from 'AppTheme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.menuBg,
  },
});
export class Menu extends Component {
  static propTypes = {
    routeScene: PropTypes.any.isRequired,
    showSideBar: PropTypes.func.isRequired,
    disable: PropTypes.func.isRequired,
    setCurrentScene: PropTypes.func.isRequired,
    currentScene: PropTypes.any.isRequired,
    isOpen: React.PropTypes.bool,
  };
  static defaultProps = {
    isOpen: false
  };

  onShowMain = () => {
    this.props.routeScene('MainScene');
  };

  onShowBrunchgram = () => {
    this.props.routeScene('BrunchgramScene');
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  renderMenuItem = () => {
    const { currentScene } = this.props;
    return (
      <ScrollView style={styles.contentContainer}>
        <TouchableOpacity style={[styles.itemContainer, currentScene === 'MainScene' ? styles.selectedItemContainer : {}]} onPress={this.onShowMain}>
          <View style={styles.iconContainer}>
            <Image source={currentScene === 'MainScene' ? images.iconBrunchgramSelected : images.peachCupIcon} style={styles.menuIcon}/>
          </View>
          <Text style={[styles.menuItemText, currentScene === 'MainScene' ? styles.selectedMenuItemText : {}]}>
            Where to go?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemContainer, currentScene === 'BrunchgramScene' ? styles.selectedItemContainer : {}]} onPress={this.onShowBrunchgram}>
          <View style={styles.iconContainer}>
            <Image source={currentScene === 'BrunchgramScene' ? images.iconBrunchgramSelected : images.iconBrunchgram} style={styles.menuIcon} />
          </View>
          <Text style={[styles.menuItemText, currentScene === 'BrunchgramScene' ? styles.selectedMenuItemText : {}]}>
            Brunchgram
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemContainer, currentScene === 'ShareScene' ? styles.selectedItemContainer : {}]}>
          <View style={styles.iconContainer}>
            <Image source={currentScene === 'ShareScene' ? images.iconBrunchgramSelected : images.smartPhoneIcon} style={styles.menuIcon} />
          </View>
          <Text style={[styles.menuItemText, currentScene === 'ShareScene' ? styles.selectedMenuItemText : {}]}>
            Share & Win
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemContainer, currentScene === 'SettingsScene' ? styles.selectedItemContainer : {}]}>
          <View style={styles.iconContainer}>
            <Image source={currentScene === 'SettingsScene' ? images.iconBrunchgramSelected : images.iconSettings} style={styles.menuIcon} />
          </View>
          <Text style={[styles.menuItemText, currentScene === 'SettingsScene' ? styles.selectedMenuItemText : {}]}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Image source={images.iconLogout} style={styles.menuIcon} />
          </View>
          <Text style={styles.menuItemText}>
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  render() {
    return (
      <View style={style.container}>
        <View style={{height: metrics.navBarHeight, backgroundColor: colors.persianGreen}}></View>
        {this.renderMenuItem()}
        <View style={styles.menuRightBorderContainer}>
          <Image source={images.menuRightBorder} style={styles.menuRightBorder} />
        </View>
      </View>
    );
  }
}



