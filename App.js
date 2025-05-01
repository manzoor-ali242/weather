import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer Navigator
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen'; // Import HomeScreen
import { View, Text, StyleSheet, Switch } from 'react-native';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Dark Mode state

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Drawer Screen to show menu
  const DrawerScreen = () => (
    <View style={[styles.drawerContainer, darkMode ? styles.dark : styles.light]}>
      <Text style={styles.drawerText}>Weather App - Menu</Text>
      <Switch
        value={darkMode}
        onValueChange={toggleDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <NavigationContainer>
      {/* Use Drawer Navigator for the app */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide header in drawer
          drawerStyle: {
            backgroundColor: darkMode ? '#1A1A1A' : '#fff',
            width: 240,
          },
        }}
      >
        {/* Home Screen inside the Drawer */}
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} darkMode={darkMode} />}
        </Drawer.Screen>
        {/* Menu Screen */}
        <Drawer.Screen name="Menu" component={DrawerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Styles for Dark and Light Mode
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerText: {
    fontSize: 22,
    marginBottom: 20,
  },
  dark: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
  },
  light: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
