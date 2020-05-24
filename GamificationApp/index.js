/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, unstable_enableLogBox} from 'react-native';
import Index from './src/Index';
import {name as appName} from './app.json';
unstable_enableLogBox();
AppRegistry.registerComponent(appName, () => Index);
