import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { space } from '@theme/space';

export type StyledType<T> = { children?: any } & T;

export type StitchesSpace = `$${keyof typeof space}`;
export type StitchesColor = `$${keyof typeof colors}`;
export type StitchesFonts = `$${keyof typeof fonts}`;
