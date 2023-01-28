import { space } from '@theme/space';

export type StyledType<T> = { children?: any } & T;

export type StitchesSpace = `$${keyof typeof space}`;
