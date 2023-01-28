import { StitchesSpace } from '@theme/theme.types';

export interface ScreenProps {
  children?: any;

  /**
   * define if the screen content will be rendered inside a scrollview
   *
   * @default true
   */
  scrollview?: boolean;

  /**
   * define the edges spacing inside the screen content
   *
   * @default $3
   */
  spacing?: StitchesSpace;
}
