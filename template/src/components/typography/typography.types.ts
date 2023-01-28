import { TextProps } from 'react-native';

import {
  StitchesColor,
  StitchesFontSizes,
  StitchesFonts,
} from '@theme/theme.types';

export interface TypographyProps extends TextProps {
  children?: string | string[];

  /**
   * customize the font color
   *
   * @default $text0
   */
  color?: StitchesColor;

  /**
   * customize the font family
   *
   * @default $default
   */
  family?: StitchesFonts;

  /**
   * defined the text alignment
   *
   * @default left
   */
  align?: 'left' | 'center' | 'right';

  /**
   * customize the font-size
   *
   * @default $3
   */
  size?: StitchesFontSizes;
}
