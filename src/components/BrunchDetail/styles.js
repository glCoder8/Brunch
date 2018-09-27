import { StyleSheet } from 'react-native';
import { colors, images, metrics } from 'AppTheme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  newsImgContainer: {
    height: 180,
    backgroundColor: colors.white
  },
  newsImg: {
    height: 180,
    width: metrics.screenWidth,
    resizeMode: 'cover',
    opacity: 0.8,
  },
  briefContainer: {
    paddingHorizontal: 25,
    paddingTop: 15
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleText: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 30,
  },
  toggleContainer: {
    height: 60,
    borderTopWidth: 1,
    borderColor: colors.gray1,
    borderBottomWidth: 1,
    backgroundColor: colors.lightGray1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  ratingContainer: {
    height: 30,
    flexDirection: 'row',
    marginVertical: 8
  },
  scheduleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5
  },
  grayText: {
    color: colors.darkGray,
    fontSize: 18
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  infoContainer: {
    padding: 10
  },
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  itemBorderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1
  },
  infoItemImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  infoText: {
    fontSize: 22,
    color: colors.gray,
    paddingHorizontal: 20,
  },
  reviewContainer: {
    paddingVertical: 20
  },
  reviewDetail: {
    flexDirection: 'row',
    marginTop: 20,
  },
  reviewComment: {
    color: 'black',
    fontSize: 20
  },
  reviewPhoto: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  reviewName: {
    paddingHorizontal: 10,
    color: colors.nameColor,
    fontSize: 20,
    alignSelf: 'center'
  },
  reviewDate: {
    fontSize: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  reviewTexts: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});