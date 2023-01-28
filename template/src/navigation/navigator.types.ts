import { FC } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  home: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, T>
>;
