import React, { PropTypes } from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';
import { colors, images, metrics } from 'AppTheme';

const styles = StyleSheet.create({
  track: {
    flex: 1,
    flexDirection: 'row'
  },
  option: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.toggleBorder,
    borderWidth: 1,
    height: 40
  },
  optionText: {
    color: 'black'
    // fontWeight: 'bold'
  },
  selectedOptionText: {
    color: 'white'
  },
  firstOption: {
    borderRightWidth: 0,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  endOption: {
    borderLeftWidth: 0,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  }
});

const getSelectedStyle = (options, value, selectedStyles, selectedStyle) => {
  const idx = options.indexOf(value);
  if (selectedStyle) {
    return selectedStyle;
  } else if (selectedStyles && selectedStyles[idx]) {
    return selectedStyles[idx];
  }
  return null;
};

const getSelectedTextStyle = (selectedTextStyle) => {
  if (selectedTextStyle) {
    return selectedTextStyle;
  }
  return styles.selectedOptionText;
};

const renderOptions = (options, value, onSelect, textStyle,
                       selectedStyles, selectedStyle, selectedTextStyle) => (
  options.map((option, index) => {
    const styleSelected = option === value ?
      getSelectedStyle(options, value, selectedStyles, selectedStyle) : null;
    const styleSelectedText = option === value ?
      getSelectedTextStyle(selectedTextStyle) : null;
    return (
      <TouchableHighlight
        style={[styles.option, styleSelected, index === 0 ? styles.firstOption : {}, index === options.length - 1 ? styles.endOption : {} ]}
        onPress={() => onSelect(option)}
        key={option}
      >
        <Text
          style={[styles.optionText, textStyle, styleSelectedText, {fontSize: 18}]}>{option}</Text>
      </TouchableHighlight>
    );
  })
);

export function ToggleButton({
  style,
  trackStyle,
  options,
  value,
  onSelect,
  textStyle,
  selectedStyles,
  selectedStyle,
  selectedTextStyle
}) {
  return (
    <View style={[styles.track, style]}>
      {renderOptions(options, value, onSelect, textStyle,
        selectedStyles, selectedStyle, selectedTextStyle)}
    </View>
  );
}

ToggleButton.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  selectedStyles: PropTypes.array,
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  selectedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  selectedTextStyle: PropTypes.object
};
