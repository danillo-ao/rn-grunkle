import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from '@theme/theme';

import { queryClient } from '../app.composer';

const AllTheProviders = ({ children }: any) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
