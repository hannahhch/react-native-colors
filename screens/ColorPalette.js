import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => {
        return <ColorBox colorName={item.colorName} colorHex={item.hexCode} />;
      }}
      ListHeaderComponent={<Text style={styles.header}>Solarized</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 10,
    width: '100%',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default ColorPalette;
