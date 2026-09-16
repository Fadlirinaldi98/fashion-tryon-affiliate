import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import AffiliateScreen from './src/screens/AffiliateScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Fashion Try-On',
          }}
        />
        <Tab.Screen 
          name="Camera" 
          component={CameraScreen}
          options={{
            title: 'Try On',
          }}
        />
        <Tab.Screen 
          name="Affiliate" 
          component={AffiliateScreen}
          options={{
            title: 'Affiliates',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
