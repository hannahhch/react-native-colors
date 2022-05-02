import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PalettePreview = ({ handlePress, palette }) => {
  return (
    <TouchableOpacity style={styles.navigation} onPress={handlePress}>
      <Text style={styles.text}>{palette.title}</Text>
      <FlatList
        horizontal={true}
        initialNumToRender={5}
        data={palette.colors}
        keyExtractor={(element) => element.colorName}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  box: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  text: {
    marginBottom: 10,
  },
});

export default PalettePreview;
