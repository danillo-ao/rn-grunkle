import React from 'react';

import { render, screen } from '@tests';

import { Box } from '@components/box';
import { Typography } from '@components/typography';

describe('<Box />', () => {
  it('should render correctly', () => {
    render(<Box />);
  });

  it('should render the children correctly', () => {
    const text = 'Existence is pain to a meeseeks Jerry.';

    render(
      <Box>
        <Typography>{text}</Typography>
      </Box>,
    );

    expect(screen.queryByText(text)).toBeDefined();
  });
});
