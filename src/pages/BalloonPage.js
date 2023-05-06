import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

const BalloonPage = ({ navigation }) => {
  const [isInflated, setIsInflated] = useState(false);
  const balloonSize = useRef(new Animated.Value(0)).current;

  const handleInflate = () => {
    setIsInflated(true);
    Animated.timing(balloonSize, {
      toValue: 1,
      duration: 2000,
      easing: Easing.elastic(2),
      useNativeDriver: true,
    }).start();
  };

  const handleDeflate = () => {
    setIsInflated(false);
    Animated.timing(balloonSize, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const balloonStyle = {
    width: 100,
    height: 150,
    borderRadius: 50,
    backgroundColor: 'red',
    transform: [
      { scale: balloonSize },
      { translateY: isInflated ? -80 : 0 }
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.balloonContainer}>
        <Animated.View style={balloonStyle}></Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        {isInflated ?
          <TouchableOpacity style={styles.deflateButton} onPress={handleDeflate}>
            <Text style={styles.buttonText}>Deflate</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.inflateButton} onPress={handleInflate}>
            <Text style={styles.buttonText}>Inflate</Text>
          </TouchableOpacity>
        }
      </View>
      <View style={styles.formButtonContainer}>
        <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('Form')}>
          <Text style={styles.formButtonText}>Form Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  balloonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  inflateButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deflateButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  formButtonContainer: {
    position: 'absolute',
    bottom: 20,
  },
  formButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  formButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BalloonPage;
