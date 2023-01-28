import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@tests';

import { Screen } from '@components/screen';

describe('<Screen/>', () => {
  it('should render correctly', () => {
    render(<Screen />);
  });

  it('should render the children inside a scrollview', () => {
    const text = 'Aww, gee, you got me there Rick.';
    render(
      <Screen>
        <Text>{text}</Text>
      </Screen>,
    );

    expect(screen.getByText(text)).toBeDefined();
    expect(screen.queryByTestId('scroll-view')).toBeDefined();
  });

  it('should not render the content inside a scrollview', () => {
    const text = 'Go home and drink, grandpa.';
    render(
      <Screen scrollview={false}>
        <Text>{text}</Text>
      </Screen>,
    );

    expect(screen.getByText(text)).toBeDefined();
    expect(screen.queryByTestId('scroll-view')).toBeNull();
    expect(screen.queryByTestId('screen-view')).toBeDefined();
  });
});
