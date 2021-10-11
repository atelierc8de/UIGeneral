/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      // Account: {
      //   screens: {
      //     Login: {
      //       screens: {
      //         LoginScreen: 'login'
      //       }
      //     }
      //   }
      // },
      Root: {
        screens: {
          Main: {
            screens: {
              MainScreen: 'main',
            },
          },
          Web: {
            screens: {
              WebScreen: 'web',
            },
          },
          MacOS: {
            screens: {
              MacOSScreen: 'macos',
            },
          },
          Chart: {
            screens: {
              ChartScreen: 'chart',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
