import React from 'react';
import { StyleSheet, View } from 'react-native';

const Balloon = ({ size }) => {
  return (
    <View style={[styles.balloon, { width: size, height: size }]} />
  );
};

const styles = StyleSheet.create({
  balloon: {
    backgroundColor: '#F44336',
    borderRadius: 1000,
  },
});

export default Balloon;
