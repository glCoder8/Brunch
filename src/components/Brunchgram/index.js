import React, {Component, PropTypes} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ListView,
} from 'react-native';

import {RefreshListView, CollectionView} from 'AppComponents';
import {default as styles} from './styles';
import {colors, images} from 'AppTheme';

const INSTAGRAM_CLIENT_ID = '8ef2af4f200f4c5b9c207517af3a7ef7';

export const testPhotos = [
  {image: require('../../assets/testImage/photo1.png')},
  {image: require('../../assets/testImage/photo2.png')},
  {image: require('../../assets/testImage/photo3.png')},
  {image: require('../../assets/testImage/photo4.png')},
  {image: require('../../assets/testImage/photo5.png')},
  {image: require('../../assets/testImage/photo6.png')},
  {image: require('../../assets/testImage/photo7.png')},
  {image: require('../../assets/testImage/photo8.png')},
  {image: require('../../assets/testImage/photo9.png')},
];

export class Brunchgram extends Component {
  static propTypes = {
    location: PropTypes.object,
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {
    const lat = 37.7982;
    const lng = -122.4222;
    const distance = Math.round(1000);

    fetch(`https://api.instagram.com/v1/media/search?lat=${lat}&lng=${lng}&distance=${distance}&client_id=${INSTAGRAM_CLIENT_ID}`)
      .then((response) => response.json())
      .then((responseData) => {
        debugger;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true
        });
      })
      .done();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <CollectionView
          numberOfColumn={3}
          items={testPhotos}
          onShowTeamDetail={this.onClickedPhoto}
        />
      </ScrollView>
    );
  }
}