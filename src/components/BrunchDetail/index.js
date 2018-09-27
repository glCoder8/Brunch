import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ListView,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import { ToggleButton, StarRating, RefreshListView } from 'AppComponents';
import { default as styles } from './styles';
import { colors, images, metrics } from 'AppTheme';

import { BrunchDetailInfo } from './BrunchDetailInfo';
import { BrunchDetailReviews } from './BrunchDetailReviews';
import { BrunchDetailPhotos } from './BrunchDetailPhotos';

const TEST_DATA = {
  title: 'Horfod hopeful to play tonight',
  name: 'Blonda',
  reviewCount: 2,

};

const tabItems = ['Info', 'Reviews', 'Photos'];

export class BrunchDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    disableSideBar: PropTypes.func,
    showSideBar: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Info',
      starCount: 0
    };
  }
  onTabSelected = (selectedTab) => {
    this.setState({ selectedTab });
  };
  
  renderContent = () => {
    const { selectedTab } = this.state;
    switch (selectedTab) {
      case 'Info':
        return <BrunchDetailInfo />;
      case 'Reviews':
        return <BrunchDetailReviews />;
      case 'Photos':
        return <BrunchDetailPhotos />;
      default:
        break;
    }
  };
  render() {
    const { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.newsImgContainer}>
          <Image style={styles.newsImg} source={require('../../assets/testImage/oho.png')} />
        </View>
        <View style={styles.briefContainer}>
          <Text style={styles.titleText}>{TEST_DATA.name}</Text>
          <View style={styles.ratingContainer}>
            <StarRating
              maxRating={5}
              rating={2}
            />
            <Text style={[styles.grayText, {marginTop: 3, marginLeft: 5}]}>2 reviews</Text>
          </View>
          <View style={styles.scheduleContainer}>
            <View >
              <Text style={[styles.grayText]}>Monday - Friday</Text>
              <Text style={[styles.grayText]}>Saturday</Text>
            </View>
            <View >
              <Text style={[styles.grayText]}>08:00AM - 10:00PM</Text>
              <Text style={[styles.grayText]}>10:00AM - 08:00PM</Text>
            </View>
          </View>

        </View>
        <View style={styles.toggleContainer}>
          <ToggleButton
            options={tabItems}
            onSelect={this.onTabSelected}
            value={selectedTab}
            selectedStyle={{ backgroundColor: colors.persianGreen}}
          />
        </View>
        <ScrollView style={styles.infoContainer}>
          {this.renderContent()}
        </ScrollView>
      </View>
    );
  }
}
