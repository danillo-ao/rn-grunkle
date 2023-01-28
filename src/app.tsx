import React from 'react';

import { styled } from '@theme/theme';

import AppComposer from './app.composer';

const SafeAreaView = styled('SafeAreaView', {
  flex: 1,
});

const App = () => {
  return (
    <SafeAreaView>
      <AppComposer />
    </SafeAreaView>
  );
};

export default App;
