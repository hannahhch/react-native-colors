import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.colorHex,
  };
  const textColor = {
    color:
      parseInt(props.colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <Text style={[styles.box, boxColor, textColor]}>
      {props.colorName}: {props.colorHex}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 16,
    width: '100%',
  },
  box: {
    color: 'white',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  boxContainer: {
    width: '100%',
  },
});

export default ColorBox;
