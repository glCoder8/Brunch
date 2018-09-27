import React, { PropTypes } from 'react';
import {
  Animated,
  PanResponder,
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { metrics, screenWidth, screenHeight } from './../../../theme';
import { Menu } from './menu';
import { default as styles } from './styles';
const barrierForward = metrics.screenWidth / 4;

function shouldOpenMenu(dx) {
  return dx > barrierForward;
}

export class SideMenu extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    edgeHitWidth: React.PropTypes.number,
    toleranceX: React.PropTypes.number,
    toleranceY: React.PropTypes.number,
    menuPosition: React.PropTypes.oneOf(['left', 'right']),
    onChange: React.PropTypes.func,
    onMove: React.PropTypes.func,
    hiddenMenuOffset: React.PropTypes.number,
    disable: PropTypes.bool,
    onStartShouldSetResponderCapture: React.PropTypes.func,
    isOpen: React.PropTypes.bool,
    bounceBackOnOverdraw: React.PropTypes.bool,
    routeScene: PropTypes.any.isRequired,
    setCurrentScene: PropTypes.func.isRequired,
    currentScene: PropTypes.any.isRequired,
    showSideBar: PropTypes.func,
    disableSideBar: PropTypes.func
  };

  static defaultProps = {
    toleranceY: 10,
    toleranceX: 10,
    edgeHitWidth: 60,
    hiddenMenuOffset: 0,
    onMove: () => {},
    onStartShouldSetResponderCapture: () => true,
    onChange: () => {},
    menuPosition: 'left',
    bounceBackOnOverdraw: true,
  };

  constructor(props, context) {
    super(props, context);
    const initialMenuPositionMultiplier = props.menuPosition === 'right' ? -1 : 1;
    const openOffsetMenuPercentage = metrics.openMenuOffset / metrics.screenWidth;
    const hiddenMenuOffsetPercentage = props.hiddenMenuOffset / metrics.screenWidth;
    this.prevLeft = 0;
    this.isOpen = !!props.isOpen;
    
    this.state = {
      width: metrics.screenWidth,
      height: metrics.screenHeight,
      openOffsetMenuPercentage,
      openMenuOffset: metrics.screenWidth * openOffsetMenuPercentage,
      hiddenMenuOffsetPercentage,
      hiddenMenuOffset: metrics.screenWidth * hiddenMenuOffsetPercentage,
      left: new Animated.Value(
        props.isOpen ? metrics.openMenuOffset * initialMenuPositionMultiplier : props.hiddenMenuOffset
      )
    };
    this.onLayoutChange = ::this.onLayoutChange;
  }

  componentWillMount() {
    this.responder = PanResponder.create({
      onStartShouldSetResponderCapture: this.props.onStartShouldSetResponderCapture.bind(this),
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
    });
  }

  componentWillReceiveProps(props) {
    if (typeof props.isOpen !== 'undefined' && this.isOpen !== props.isOpen) {
      this.openMenu(props.isOpen);
    }
  }

  onLayoutChange(e) {
    const { openOffsetMenuPercentage, hiddenMenuOffsetPercentage } = this.state;
    const { width, height, } = e.nativeEvent.layout;
    const openMenuOffset = width * openOffsetMenuPercentage;
    const hiddenMenuOffset = width * hiddenMenuOffsetPercentage;
    this.setState({ width, height, openMenuOffset, hiddenMenuOffset });
  }

  getContentView() {
    const { width, height, left } = this.state;
    const { disable, children } = this.props;
    const panHandlers = disable ? {} : this.responder.panHandlers;
    const overlay = this.isOpen ? (
      <TouchableWithoutFeedback onPress={() => this.openMenu(false)}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    ) : null;
    return (
      <Animated.View
        style={[styles.frontView, { width, height }, this.animationStyle(left)]}
        ref={(ref) => this.sideMenu = ref}
        {...panHandlers}
      >
        {children}
        {overlay}
      </Animated.View>
    );
  }

  animationStyle(value) {
    return { transform: [{ translateX: value }] };
  }

  animationFunction(prop, value) {
    return Animated.spring(prop, { toValue: value, friction: 8 });
  }

  handleMoveShouldSetPanResponder(e, gestureState) {
    if (this.props.disable) {
      return;
    }

    const { menuPosition, edgeHitWidth, toleranceX, toleranceY } = this.props;
    const x = Math.round(Math.abs(gestureState.dx));
    const y = Math.round(Math.abs(gestureState.dy));
    const touchMoved = x > toleranceX && y < toleranceY;
    const withinEdgeHitWidth = menuPosition === 'right' ?
    gestureState.moveX > (metrics.screenWidth - edgeHitWidth) :
    gestureState.moveX < edgeHitWidth;
    const swipingToOpen = this.menuPositionMultiplier() * gestureState.dx > 0;
    if (this.isOpen) {
      return touchMoved;
    }
    return withinEdgeHitWidth && touchMoved && swipingToOpen;
  }

  handlePanResponderMove(e, gestureState) {
    if (this.props.disable) {
      return;
    }
    const { left, openMenuOffset } = this.state;
    const { bounceBackOnOverdraw, onMove } = this.props;
    if (left.__getValue() * this.menuPositionMultiplier() >= 0) {
      let newLeft = this.prevLeft + gestureState.dx;
      if (!bounceBackOnOverdraw && Math.abs(newLeft) > openMenuOffset) {
        newLeft = this.menuPositionMultiplier() * openMenuOffset;
      }
      onMove(newLeft);
      left.setValue(newLeft);
    }
  }

  handlePanResponderEnd(e, gestureState) {
    if (this.props.disable) {
      return;
    }
    const { left } = this.state;
    const offsetLeft = this.menuPositionMultiplier() *
      (left.__getValue() + gestureState.dx);
    this.openMenu(shouldOpenMenu(offsetLeft));
  }

  menuPositionMultiplier() {
    const { menuPosition } = this.props;
    return menuPosition === 'right' ? -1 : 1;
  }

  moveLeft(offset) {
    const { left } = this.state;
    const newOffset = this.menuPositionMultiplier() * offset;
    this.animationFunction(left, newOffset).start();
    this.prevLeft = newOffset;
  }

  openMenu(isOpen) {
    const { hiddenMenuOffset, openMenuOffset, } = this.state;
    this.moveLeft(isOpen ? openMenuOffset : hiddenMenuOffset);
    this.isOpen = isOpen;
    this.forceUpdate();
    this.props.showSideBar(isOpen);
  }

  render() {
    const {
      menuPosition,
      routeScene,
      setCurrentScene,
      currentScene,
      showSideBar,
      disableSideBar,
      isOpen
    } = this.props;
    const menu = (
      <Menu
        routeScene={routeScene}
        disable={disableSideBar}
        showSideBar={showSideBar}
        setCurrentScene={setCurrentScene}
        currentScene={currentScene}
        isOpen={isOpen}
      />
    );
    const { width, openMenuOffset } = this.state;
    const boundryStyle = menuPosition === 'right' ?
      { left: width - openMenuOffset } :
      { right: width - openMenuOffset };
    const menuComponent = (
      <View style={[styles.menu, boundryStyle]}>{menu}</View>
    );
    return (
      <View style={styles.container} onLayout={this.onLayoutChange}>
        {menuComponent}
        {this.getContentView()}
      </View>
    );
  }
}
