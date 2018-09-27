import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import { metrics } from 'AppTheme';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ffffff'
  },
  itemContainer: {
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffffff'
  },
  itemImg: {
    resizeMode: 'stretch'
  }
});
function renderCollection(items, numberOfColumn, onShowTeamDetail) {
  const imgContainerSize = metrics.screenWidth / numberOfColumn;
  const imgSize = imgContainerSize - 5;
  const itemsView = items.map((item, index) => {
    let borderLeftWidth = 0.5;
    let borderRightWidth = 0.5;
    let borderTopWidth = 0.5;
    let borderBottomWidth = 0.5;
    if (index % numberOfColumn === 0) {
      borderLeftWidth = 0;
    }
    if (index % numberOfColumn === 3) {
      borderRightWidth = 0;
    }
    if (Math.floor(index / numberOfColumn) === 0) {
      borderTopWidth = 0;
    }
    if (Math.floor(index / numberOfColumn) === Math.floor(items.length / numberOfColumn)) {
      borderBottomWidth = 0;
    }
    return (
      <TouchableOpacity
        style={[styles.itemContainer, {
          borderLeftWidth,
          borderRightWidth,
          borderTopWidth,
          borderBottomWidth,
          width: imgContainerSize,
          height: imgContainerSize
        }]}
        key={index}
        onPress={() => onShowTeamDetail(item.name)}
      >
        <Image
          source={item.image}
          style={[styles.itemImg, { width: imgSize, height: imgSize }]}
        />
      </TouchableOpacity>
    );
  });
  return itemsView;
}
export function CollectionView({
  numberOfColumn,
  items,
  onShowTeamDetail
}) {
  return (
    <View style={styles.container}>
      {renderCollection(items, numberOfColumn, onShowTeamDetail)}
    </View>
  );
}

CollectionView.propTypes = {
  numberOfColumn: PropTypes.number,
  items: PropTypes.array,
  onShowTeamDetail: PropTypes.func,
};
