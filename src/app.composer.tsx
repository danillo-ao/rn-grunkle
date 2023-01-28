import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@navigation/navigator.comp';
import { ThemeProvider } from '@theme/theme';

const AppComposer = () => {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}
    >
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default AppComposer;
