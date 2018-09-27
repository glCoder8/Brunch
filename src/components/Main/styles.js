import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  toggleContainer: {
    height: 50,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  listViewItem: {
    height: 240,
    alignItems: 'center'
  },
  itemContentContainer: {
    flex: 1,
    marginVertical: 10,
    width: metrics.screenWidth - 30,
    shadowRadius: 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 15
  },
  layerImg: {
    width: metrics.screenWidth - 30,
    height: 220,
    resizeMode: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  infoContainer: {
    marginTop: 160,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconWalk: {
    flex: 1,
    height: 30,
    marginTop: 15,
    resizeMode: 'contain',
  },
  iconCompass: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  buttonCompass: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 5,
    alignItems: 'center'
  },
  itemName: {
    marginTop: 8,
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemDistance: {
    marginTop: 2,
    color: colors.lightGray,
  },
  grayText: {
    color: colors.gray,
    marginBottom: 10,
  },
  blackText: {
    color: colors.gray
  }
});