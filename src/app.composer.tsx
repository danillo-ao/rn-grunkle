import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@navigation/navigator.comp';

const AppComposer = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default AppComposer;
