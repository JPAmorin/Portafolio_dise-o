import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Main from '../screens/main';
import TaskDetails from '../screens/taskdetails'

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const HomeStack = createStackNavigator();

  const HomeStackRoutes = () => {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Main" component={Main} />
        <HomeStack.Screen name="TaskDetails" component={TaskDetails} />
      </HomeStack.Navigator>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>{HomeStackRoutes()}</NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;