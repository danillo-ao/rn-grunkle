import React from 'react';

import { Box } from '@components/box';
import { Screen } from '@components/screen';
import { Typography } from '@components/typography';

import { HomeScreenProps } from '@screens/home/home.types';

import * as Styles from './home.styles';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Screen scrollview={false} bg="$background2">
      <Styles.HomeScreenInner>
        {/**/}
        <Styles.HomeScreenImage
          resizeMethod="resize"
          resizeMode="contain"
          source={{
            uri: 'https://d26jn47mxft9j9.cloudfront.net/yoshi-egg.png',
          }}
        />

        <Box my="$6">
          <Typography family="$robotoBlack" size="$5">
            GRUNKLE
          </Typography>
        </Box>
        <Box>
          <Typography align="center">
            The Grunkle template is a compilation of architecture settings, code
            patterns, and components such as eslint, icons, prettier, and more!
            Imagine this template as an egg, and you will decide what hatches
            inside. Develop something amazing, be creative!
          </Typography>
          <Box mt="$6">
            <Typography align="center" family="$robotoBold">
              Enjoy!
            </Typography>
          </Box>
        </Box>
      </Styles.HomeScreenInner>
    </Screen>
  );
};

export { HomeScreen };
