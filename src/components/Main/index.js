import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { RefreshListView } from 'AppComponents';
import { default as styles } from './styles';
import { colors, images } from 'AppTheme';
import { testData } from 'AppConstants';

export class Main extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    disableSideBar: PropTypes.func,
    showSideBar: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: testData,
      isRefreshing: false,
    };
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.animationTimeout = null;
  }
  componentWillUnmount() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }
  onShowDetail = () => {
    this.props.navigator.push('BrunchDetailScene');
  };
  onShowMap = () => {
    this.props.navigator.push('MapScene');
  };
  _onInfinite = () => {
    this.animationTimeout = this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };
  _onRefresh = () => {
    this.animationTimeout = this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };
  renderListViewItem = (item) => (
    <View style={styles.listViewItem}>
      {this.renderItemContent(item)}
    </View>
  );
  renderInfo = (item) => {
    return (
      <View style={styles.infoContainer}>
        <Image style={styles.iconWalk} source={images.walkIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDistance}>{item.distance}</Text>
        </View>
        <TouchableOpacity style={styles.buttonCompass} onPress={this.onShowMap}>
          <Image style={styles.iconCompass} source={images.compassIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  renderItemContent = (item) => {
    return (
      <TouchableOpacity style={styles.itemContentContainer} onPress={this.onShowDetail}>
        <Image source={item.image_url} style={styles.layerImg}>
          {this.renderInfo(item)}
        </Image>
      </TouchableOpacity>
    );
  };
  renderFeedList = () => {
    const { items, isRefreshing } = this.state;
    const dataSource = this.dataSource.cloneWithRows(items);
    return (
      <View style={styles.contentContainer}>
        <RefreshListView
          dataSource={dataSource}
          renderRow={this.renderListViewItem}
          refreshing={isRefreshing}
          onRefresh={this._onRefresh}
          onInfinite={this._onInfinite}
          enableEmptySections={true}
        />
      </View>
    );
  };
  render() {
    const { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        {this.renderFeedList()}
      </View>
    );
  }
}