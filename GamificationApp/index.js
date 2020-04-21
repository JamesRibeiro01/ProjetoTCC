/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, unstable_enableLogBox} from 'react-native';
import Main from './src/Main';
import {name as appName} from './app.json';
unstable_enableLogBox();
AppRegistry.registerComponent(appName, () => Main);
