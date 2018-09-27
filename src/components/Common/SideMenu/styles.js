import {StyleSheet} from 'react-native';
import {colors, metrics} from 'AppTheme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.menuBg,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },


  contentContainer: {
    backgroundColor: colors.menuBg,
    flex: 1
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    alignSelf: 'center'
  },
  itemContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.markerInfoBg,
    backgroundColor: colors.white
  },
  selectedItemContainer: {
    backgroundColor: colors.menuSelected
  },
  menuIcon: {
    width: 25,
    height: 30,
    resizeMode: 'contain'
  },
  menuItemText: {
    color: colors.gray,
    marginLeft: 15,
    fontSize: 20,
  },
  selectedMenuItemText: {
    color: colors.white,
  },
  menuRightBorderContainer: {
    position: 'absolute',
    top: metrics.navBarHeight,
    height: metrics.screenHeight - metrics.navBarHeight,
    right: 0,
  },
  menuRightBorder: {
    resizeMode: 'contain',
  }
});