import React, {Component, PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';
import {RefreshListView, CollectionView} from 'AppComponents';
import {images} from 'AppTheme';
import {default as styles} from './../styles';
import _ from 'lodash';

export const testPhotos = [
  {image: require('../../../assets/testImage/photo1.png')},
  {image: require('../../../assets/testImage/photo2.png')},
  {image: require('../../../assets/testImage/photo3.png')},
  {image: require('../../../assets/testImage/photo4.png')},
  {image: require('../../../assets/testImage/photo5.png')},
  {image: require('../../../assets/testImage/photo6.png')},
  {image: require('../../../assets/testImage/photo7.png')},
  {image: require('../../../assets/testImage/photo8.png')},
  {image: require('../../../assets/testImage/photo9.png')},
];

export class BrunchDetailPhotos extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickedPhoto = () => {
    alert("Photo Clicked");
  };

  render() {
    return (
      <CollectionView
        numberOfColumn={3}
        items={testPhotos}
        onShowTeamDetail={this.onClickedPhoto}
      />
    )
  };
}
;


