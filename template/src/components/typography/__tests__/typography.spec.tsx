import React from 'react';

import { render, screen } from '@tests';

import { Typography } from '@components/typography';

describe('<Typography />', () => {
  const text =
    'What is my purpose. You pass butter. Oh My God. Yeah, Welcome to the club pal.';

  it('should render correctly', () => {
    render(<Typography>{text}</Typography>);
    expect(screen.queryByText(text)).toBeDefined();
  });
});
