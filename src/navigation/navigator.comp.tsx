import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@navigation/navigator.types';
import { routes } from '@navigation/routes';

import { HomeScreen } from '@screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator
      initialRouteName={routes.index}
      screenOptions={screenOptions}
    >
      <Stack.Screen name={routes.home} component={HomeScreen as any} />
    </Stack.Navigator>
  );
};

export default Navigator;
