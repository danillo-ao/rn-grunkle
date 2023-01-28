import { StitchesColor, StitchesSpace } from '@theme/theme.types';

export interface ScreenCompProps {
  children?: any;

  /**
   * define if the screen content will be rendered inside a scrollview
   *
   * @default true
   */
  scrollview?: boolean;

  /**
   * define the background of the screen
   *
   * @default $background01
   */
  bg?: StitchesColor;

  /**
   * define the edges spacing inside the screen content
   *
   * @default $default
   */
  spacing?: StitchesSpace;
}
