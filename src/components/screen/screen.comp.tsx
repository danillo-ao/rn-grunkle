import React from 'react';

import { ScreenProps } from '@components/screen/screen.types';

import * as Styles from './screen.styles';

const Screen: React.FC<ScreenProps> = ({ children, scrollview, spacing }) => {
  const css = { pa: spacing };

  const renderContent = () => {
    if (scrollview) {
      return (
        <Styles.ScreenScrollView testID="scroll-view">
          <Styles.ScreenContentInner css={css}>
            {children}
          </Styles.ScreenContentInner>
        </Styles.ScreenScrollView>
      );
    }

    return (
      <Styles.ScreenContentInner css={css}>
        {children}
      </Styles.ScreenContentInner>
    );
  };

  return (
    <Styles.ScreenContent testID="screen-view">
      {renderContent()}
    </Styles.ScreenContent>
  );
};

Screen.defaultProps = {
  scrollview: true,
  spacing: '$3',
};

export { Screen };
