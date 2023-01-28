import React from 'react';
import { Text } from 'react-native';

import { Screen } from '@components/screen';

import { HomeScreenProps } from '@screens/home/home.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Screen>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
    </Screen>
  );
};

export { HomeScreen };
