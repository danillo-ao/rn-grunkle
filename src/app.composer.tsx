import React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigator from '@navigation/navigator.comp';

import { ThemeProvider } from '@theme/theme';

export const queryClient = new QueryClient();

library.add(fab, far, fas);

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
