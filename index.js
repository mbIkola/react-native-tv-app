/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
