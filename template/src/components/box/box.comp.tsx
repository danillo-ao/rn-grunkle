import React from 'react';

import { BoxProps } from '@components/box/box.types';

import * as Styles from './box.styles';

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  const { pa, pt, pr, pb, pl, py, px } = props;
  const { ma, mt, mr, mb, ml, my, mx } = props;
  const { flex, bg, width, height, align, justify } = props;

  const css = {
    pa,
    pt,
    pr,
    pb,
    pl,
    py,
    px,
    ma,
    mt,
    mr,
    mb,
    ml,
    my,
    mx,
    flex,
    bg,
    width,
    height,
    alignItems: align,
    justifyContent: justify,
  };

  return <Styles.BoxContent css={css}>{children}</Styles.BoxContent>;
};

export { Box };
