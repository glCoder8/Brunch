import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  map: {
    width: metrics.screenWidth,
    height: metrics.screenHeight - metrics.navBarHeight,
    flex: 1,
    backgroundColor: 'red'
  },
  compassContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  compass: {
    width: 40,
    height: 40
  },
  infoContainer: {
    marginTop: (metrics.screenHeight - metrics.navBarHeight) / 2,
    marginLeft: 20,
    width: metrics.screenWidth - 40,
    height: 100,
    backgroundColor: colors.markerInfoBg,
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 2,
    flexDirection: 'row',
    padding: 10
  },
  logoImg: {
    width: 100,
    height: 80,
    backgroundColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: colors.gray1,
    borderWidth: 1
  },
  detailRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailContainer: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  detailTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  detailDistance: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  personIcon: {
    marginBottom: -5,
    width: 12,
    resizeMode: 'contain'
  },
  txtDistance: {
    color: colors.white,
    paddingHorizontal: 5,
  },
  arrowRight: {
    width: 25,
    resizeMode: 'contain',
    marginTop: 5
  }
});