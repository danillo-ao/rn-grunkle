import { createStitches } from 'stitches-native';
import { stitchesConfig } from '@theme/stitches.config';

const { ThemeProvider, styled, useTheme, theme, config } =
  createStitches(stitchesConfig);

export { ThemeProvider, theme, styled, useTheme, config };
