import { TextProps } from 'react-native';

import { StitchesColor, StitchesFonts } from '@theme/theme.types';

export interface TypographyProps extends TextProps {
  children?: string | string[];
  color?: StitchesColor;
  family?: StitchesFonts;
}
