import React, {Component, PropTypes} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {default as styles} from './styles';
import {colors, images} from 'AppTheme';
import MapView from 'react-native-maps';

export const testPins = [
  {
    latlng: {
      latitude: 37.7990,
      longitude: -122.4228,
    }
  },
  {
    latlng: {
      latitude: 37.7978,
      longitude: -122.4231,
    }
  },
  {
    latlng: {
      latitude: 37.7988,
      longitude: -122.4220,
    }
  },
  {
    latlng: {
      latitude: 37.7977,
      longitude: -122.4233,
    }
  },
  {
    latlng: {
      latitude: 37.7980,
      longitude: -122.4270,
    }
  }
]
;


export class Map extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: this.props.location.latitude,
        longitude: this.props.location.longitude,
        latitudeDelta: 0.0021,
        longitudeDelta: 0.0021,
      },
      markers: testPins,
      showInfoPanel: false
    };
  }
  onRegionChange = (region) => {
    this.setState({region});
    this.showInfoPanel(false);
  }

  onPinPressed = (region) => {
    this.setState({ region });
    this.showInfoPanel(true);
  }

  onPressCenter = () => {
    this.setState({ region: this.props.location });
  }

  showInfoPanel = (showInfoPanel) => {
    this.setState({ showInfoPanel });
  }

  onPressPanel = () => {
    this.props.navigator.push('BrunchDetailScene');
  }

  renderShowPanel = () => {
    if (this.state.showInfoPanel) {
      return (
        <TouchableOpacity style={styles.infoContainer} onPress={this.onPressPanel}>
          <Image source={require('../../assets/testImage/blonda-logo.png')} style={styles.logoImg}></Image>
          <View style={styles.detailRightContainer}>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Blonda</Text>
              <View style={styles.detailDistance}>
                <Image source={images.personIcon} style={styles.personIcon} />
                <Text style={styles.txtDistance}>700 meters</Text>
              </View>
            </View>
            <Image source={images.arrowRightIcon} style={styles.arrowRight}/>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange} >
          {this.state.markers.map((marker,index) => (
            <MapView.Marker
              coordinate={marker.latlng}
              image={images.markerIcon}
              onPress={() => this.onPinPressed(marker.latlng)}
              key={index}
            />
          ))}

          <MapView.Marker
            coordinate={this.props.location}
            image={images.pinUserLoc}
            onPress={() => this.onPinPressed(this.props.location)}
          />
          <TouchableOpacity onPress={this.onPressCenter} style={styles.compassContainer}>
            <Image source={images.compassIcon} style={styles.compass} />
          </TouchableOpacity>

          {this.renderShowPanel()}
        </MapView>
      </View>
    );
  }
}