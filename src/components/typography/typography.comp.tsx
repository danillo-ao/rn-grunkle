import React from 'react';

import { TypographyProps } from '@components/typography/typography.types';

import * as Styles from './typography.styles';

const Typography: React.FC<TypographyProps> = ({
  color,
  family,
  children,
  ...props
}) => {
  const css = { color, fontFamily: family };
  return (
    <Styles.TypographyContent css={css} {...props}>
      {children}
    </Styles.TypographyContent>
  );
};

Typography.defaultProps = {
  color: '$text0',
  family: '$roboto',
};

export { Typography };
