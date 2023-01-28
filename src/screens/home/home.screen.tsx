import React from 'react';

import LottieView from 'lottie-react-native';

import { Box } from '@components/box';
import { Screen } from '@components/screen';
import { Typography } from '@components/typography';

import { HomeScreenProps } from '@screens/home/home.types';

import { useTheme } from '@theme/theme';

import * as Styles from './home.styles';

const animation = require('@assets/lottie-files/egg-tilting.json');
const HomeScreen: HomeScreenProps = () => {
  const theme = useTheme();

  return (
    <Screen scrollview={false} bg="$background2">
      <Styles.HomeScreenInner>
        {/**/}
        <Box width={200} height={200} align="center" justify="center">
          <LottieView
            resizeMode="cover"
            autoPlay
            loop
            source={animation}
            colorFilters={[{ keypath: '*', color: theme.colors.background0 }]}
          />
        </Box>

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
        {/**/}
      </Styles.HomeScreenInner>
    </Screen>
  );
};

export { HomeScreen };
