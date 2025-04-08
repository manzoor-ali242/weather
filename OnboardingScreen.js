import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/download.jpeg')} // Replace with your .webp image
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Discover the Weather in Your  City</Text>
      <Text style={styles.subtitle}>
        Get to know your weather maps and radar precipitation forecast
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C3E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
    borderRadius: 400,  // Half of the width/height for a perfect circle
    borderWidth: 5,     // Border thickness
    borderColor: 'yellow', // Border color (you can change this to any color)
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00A8FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
  },
});
