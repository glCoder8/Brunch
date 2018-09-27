import React, {PropTypes} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { images } from 'AppTheme';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
  },
  starRating: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    marginRight: 5
  }
});

function renderChildStars(maxRating, rating) {
  return _.map(_.range(0, maxRating), (item, index) => {
    return (
      <Image key={index} style={styles.starRating} source={ rating > index ? images.ratingFill : images.ratingClear} />
    );
  });
};
export function StarRating({
  maxRating,
  rating
}) {
  return (
    <View style={[styles.container]}>
      {renderChildStars(maxRating, rating)}
    </View>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};
