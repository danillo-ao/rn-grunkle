import React from 'react';

import { render } from '@tests';

import { HomeScreen } from '@screens/home';

describe('Home Screen', () => {
  it('should render correctly', () => {
    render(<HomeScreen />);
  });
});
