import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BalloonPage from '../pages/BalloonPage';
import FormPage from '../pages/FormPage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Balloon" component={BalloonPage} />
        <Stack.Screen name="Form" component={FormPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
