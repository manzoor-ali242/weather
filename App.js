import React from 'react';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './components/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {/* Add Home screen here later */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
