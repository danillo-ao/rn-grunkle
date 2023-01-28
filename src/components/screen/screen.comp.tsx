import React from 'react';

import { ScreenCompProps } from '@components/screen/screen.types';

import * as Styles from './screen.styles';

const Screen: React.FC<ScreenCompProps> = ({
  children,
  scrollview,
  bg,
  spacing,
}) => {
  const css = { pa: spacing };
  const screenCss = { bg };

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
    <Styles.ScreenContent testID="screen-view" css={screenCss}>
      {renderContent()}
    </Styles.ScreenContent>
  );
};

Screen.defaultProps = {
  bg: '$background0',
  spacing: '$4',
  scrollview: true,
};

export { Screen };
