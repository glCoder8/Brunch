import React, {Component, PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import {images} from 'AppTheme';

import {default as styles} from '../styles';

export const BrunchDetailInfo = () => {
  onClickedPhone = () => {
    alert("Phone Clicked");
  };
  onClickedLocation = () => {
    alert("Address Clicked");
  };
  onClickedDirection = () => {
    alert("Direcation Clicked");
  };

  return (
    <View style={styles.contentContainer}>
      <TouchableOpacity style={[styles.itemContainer, styles.itemBorderBottom]} onPress={this.onClickedPhone}>
        <Image source={images.phoneIcon} style={styles.infoItemImage}/>
        <Text style={styles.infoText}>(787) 749-2348</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.itemContainer, styles.itemBorderBottom]} onPress={this.onClickedLocation}>
        <Image source={images.mapLocationIcon} style={styles.infoItemImage}/>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.infoText}>959 Calle de Diego</Text>
          <Text style={styles.infoText}>San Juan, PR</Text>
          <Text style={styles.infoText}>00907</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={this.onClickedDirection}>
        <Image source={images.directionIcon} style={styles.infoItemImage}/>
        <Text style={styles.infoText}>Directions to Here</Text>
      </TouchableOpacity>
    </View>
  );
};