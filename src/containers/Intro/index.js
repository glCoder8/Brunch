import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Intro } from 'AppComponents';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export function IntroContainer({ navigator }) {
  return (
    <View style={styles.container}>
      <Intro navigator={navigator} />
    </View>
  );
}
IntroContainer.propTypes = {
  navigator: PropTypes.object,
};
