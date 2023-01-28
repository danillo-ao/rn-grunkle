import React from 'react';
import { StatusBar } from 'react-native';

import { styled, theme } from '@theme/theme';

import AppComposer from './app.composer';

const SafeAreaView = styled('SafeAreaView', {
  flex: 1,
});

const AreaView = styled('View', {
  flex: 1,
  bg: '$background1',
});

const App = () => {
  return (
    <AreaView>
      <SafeAreaView>
        <StatusBar
          animated
          backgroundColor={theme.colors.background1 as unknown as string}
          barStyle="light-content"
        />
        <AppComposer />
      </SafeAreaView>
    </AreaView>
  );
};

export default App;
