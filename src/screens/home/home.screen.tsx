import React from 'react';

import { Screen } from '@components/screen';
import { Typography } from '@components/typography';

import { HomeScreenProps } from '@screens/home/home.types';

import * as Styles from './home.styles';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Screen scrollview={false}>
      <Styles.HomeScreenInner>
        <Styles.HomeScreenImage
          resizeMethod="resize"
          resizeMode="contain"
          source={{
            uri: 'https://d26jn47mxft9j9.cloudfront.net/yoshi-egg.png',
          }}
        />

        <Typography>Lorem Ipsum dolor amet</Typography>
      </Styles.HomeScreenInner>
    </Screen>
  );
};

export { HomeScreen };
