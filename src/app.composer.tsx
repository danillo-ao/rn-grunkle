import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@navigation/navigator.comp';
import { ThemeProvider } from '@theme/theme';

const AppComposer = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default AppComposer;
