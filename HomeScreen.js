import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="menu" size={24} color="white" />
        <Text style={styles.location}>Sindh, Pakistan</Text>
        <Ionicons name="moon-outline" size={24} color="white" />
      </View>

      {/* Main Weather Report */}
      <Text style={styles.reportTitle}>Today's Report</Text>

      <Image
        source={require('../assets/download.jpeg')} // Replace with your icon
        style={styles.weatherIcon}
        resizeMode="contain"
      />

      <Text style={styles.status}>It's Cloudy</Text>
      <Text style={styles.temperature}>29°</Text>

      {/* Details Row */}
      <View style={styles.detailsRow}>
        <View style={styles.detailBox}>
          <Image source={require('../assets/download.jpeg')} style={styles.detailIcon} />
          <Text style={styles.detailText}>23 km/h</Text>
          <Text style={styles.detailLabel}>Sun</Text>
        </View>
        <View style={styles.detailBox}>
          <Image source={require('../assets/download.jpeg')} style={styles.detailIcon} />
          <Text style={styles.detailText}>30%</Text>
          <Text style={styles.detailLabel}>Humidity</Text>
        </View>
        <View style={styles.detailBox}>
          <Image source={require('../assets/download.jpeg')} style={styles.detailIcon} />
          <Text style={styles.detailText}>23 km/h</Text>
          <Text style={styles.detailLabel}>Chance of rain</Text>
        </View>
        
      </View>
      <View style={styles.warningBox}>
  <Text style={styles.warningText}>IT'S VERY HOT</Text>
</View>


      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="search" size={24} color="#555" />
        <Ionicons name="grid-outline" size={24} color="#555" />
        <Ionicons name="person-outline" size={24} color="#555" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C3E',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  warningBox: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop:100
  },
  
  warningText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  
  location: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  reportTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderColor: 'yellow',  // Correct border color
    borderWidth: 5,         // Correct property for setting the border width
    borderRadius: 125,      // Optional: to make it circular (if needed)
  }
  ,
  status: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  temperature: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  detailBox: {
    alignItems: 'center',
    
  },
  detailIcon: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  detailText: {
    color: 'white',
    fontWeight: '600',
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',             // Keeps items in a row
    justifyContent: 'space-around',   // Distributes the items evenly
    paddingVertical: 15,              // Vertical padding for space
    position: 'absolute',             // Keeps it fixed at the bottom
    bottom: 0,                        // Position it at the bottom
    left: 0,                          // Align to the left side
    right: 0,                         // Align to the right side
    backgroundColor: '#1B1B3A',       // Background color of the nav bar
    paddingHorizontal: 20,            // Optional: Adds some horizontal padding to the left and right
  }
  
});
