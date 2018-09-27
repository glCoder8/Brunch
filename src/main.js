import React, { Component, PropTypes } from 'react';
import { SideMenu } from 'AppComponents';
import { Router } from './routing';

class _MainPage extends Component {
  static propTypes = {
    sidebar: PropTypes.any,
    showSideBar: PropTypes.func,
    disableSideBar: PropTypes.func,
    setCurrentScene: PropTypes.func,
    setLocation: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.routingRef = null;
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        debugger;
        var pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        console.info('postion', pos);
        this.props.setLocation(pos);
      },
      (error) => alert('Error'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    // const position = {
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    // };
    // this.props.setLocation(position);
  }
  setCurrentScene = (scene) => {
    this.props.setCurrentScene(scene);
  };
  routingScene = (sceneName) => {
    debugger;
    this.routingRef.routingScene(sceneName);
  };
  showSideBar = (bFlag) => {
    this.props.showSideBar(bFlag);
  };
  disableSideBar = (bFlag) => {
    this.props.disableSideBar(bFlag);
  };
  render() {
    const { sidebar } = this.props;
    return (
      <SideMenu
        isOpen={sidebar.showSidebar}
        disable={sidebar.disableSidebar}
        routeScene={this.routingScene}
        setCurrentScene={this.setCurrentScene}
        currentScene={sidebar.currentScene}
        showSideBar={this.showSideBar}
        disableSideBar={this.disableSideBar}
      >
        <Router ref={(ref) => this.routingRef = ref} />
      </SideMenu>
    );
  }
}

import { sideBarContainer, locationContainer } from 'ReduxContainers';
const __MainPage = sideBarContainer(_MainPage);
const MainPage = locationContainer(__MainPage);
export default MainPage;

