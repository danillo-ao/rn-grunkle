import { ViewProps } from 'react-native';

import { StitchesColor, StitchesSpace } from '@theme/theme.types';

export interface BoxProps extends ViewProps {
  pa?: StitchesSpace;
  pt?: StitchesSpace;
  pr?: StitchesSpace;
  pb?: StitchesSpace;
  pl?: StitchesSpace;
  py?: StitchesSpace;
  px?: StitchesSpace;
  //
  ma?: StitchesSpace;
  mt?: StitchesSpace;
  mr?: StitchesSpace;
  mb?: StitchesSpace;
  ml?: StitchesSpace;
  my?: StitchesSpace;
  mx?: StitchesSpace;
  //
  flex?: number;
  bg?: StitchesColor;
  width?: number | string;
  align?: 'flex-start' | 'flex-end' | 'center';
  justify?: 'flex-start' | 'flex-end' | 'center';
}
