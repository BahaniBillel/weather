import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import colors from '../config/colors';

const SearchInput = ({ placeholder }) => {
  const handleChangeText = (newLocation) => {
    // We need to do something with newLocation
    //  stopped at page
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: colors.darkGrey,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: colors.white,
  },
});
