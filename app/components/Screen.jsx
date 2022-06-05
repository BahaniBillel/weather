import { StyleSheet, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
