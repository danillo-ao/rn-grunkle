import React from 'react';

import { TypographyProps } from '@components/typography/typography.types';

import * as Styles from './typography.styles';

const Typography: React.FC<TypographyProps> = ({
  color,
  family,
  children,
  align,
  size,
  ...props
}) => {
  const css = { color, fontFamily: family, fontSize: size, textAlign: align };
  return (
    <Styles.TypographyContent css={css} {...props}>
      {children}
    </Styles.TypographyContent>
  );
};

Typography.defaultProps = {
  color: '$text0',
  family: '$default',
  size: '$default',
};

export { Typography };
