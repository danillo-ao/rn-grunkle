import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@navigation/navigator.comp';
import { ThemeProvider } from '@theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const AppComposer = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}
        >
          <Navigator />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppComposer;
