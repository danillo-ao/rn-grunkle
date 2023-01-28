import React from 'react';
import AppComposer from './app.composer';
import { styled } from '@theme/theme';

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
