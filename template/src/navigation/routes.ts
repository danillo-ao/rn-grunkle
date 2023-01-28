import { RootStackParamList } from './navigator.types';

export const routes: { [name: string]: keyof RootStackParamList } = {
  index: 'home',
  // ---
  home: 'home',
};
