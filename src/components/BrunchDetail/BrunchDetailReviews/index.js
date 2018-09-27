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
import { RefreshListView } from 'AppComponents';
import { images } from 'AppTheme';
import { default as styles } from './../styles';
import _ from 'lodash';

const count = 5;
export const testReviews = _.map(_.range(0, count), (value, index) => {
  return {
    image_url: require('../../../assets/testImage/photo_user.png'),
    name: 'Ewa Z.',
    date: '08/02/16',
    comment: 'Blonda is the best place for brunch at condado. I’ve been there twice. Good service and good food.  Good stuff!',
  };
});

export class BrunchDetailReviews extends Component {
  static propTypes = {
  };
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  _onInfinite = () => {
    this.animationTimeout = this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 1000);
  };
  _onRefresh = () => {
    this.animationTimeout = this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 1000);
  };

  onTapReview = () => {
    alert("onTapReview");
  }

  renderReviewItem = (item) => (
    <TouchableOpacity style={[styles.reviewContainer, styles.itemBorderBottom]} onPress={this.onTapReview}>
      <Text style={styles.reviewComment}>{item.comment}</Text>
      <View style={styles.reviewDetail}>
        <Image source={item.image_url} style={styles.reviewPhoto} />
        <View style={styles.reviewTexts}>
          <Text style={styles.reviewName}>{item.name}</Text>
          <Text style={styles.reviewDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  render() {
    const { isRefreshing } = this.state;
    const dataSource = this.dataSource.cloneWithRows(testReviews);
    return (
      <View style={styles.contentContainer}>
        <RefreshListView
          dataSource={dataSource}
          renderRow={this.renderReviewItem}
          refreshing={isRefreshing}
          onRefresh={this._onRefresh}
          onInfinite={this._onInfinite}
          enableEmptySections={true}
        />
      </View>
    );
  };
}
