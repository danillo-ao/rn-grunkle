import { createStitches } from 'stitches-native';
import { themeConfig } from '@theme/theme.config';

const { ThemeProvider, styled, useTheme, theme, config } =
  createStitches(themeConfig);

export { ThemeProvider, theme, styled, useTheme, config };
