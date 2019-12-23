import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('delta_test', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('delta_test', { rootTag });
}
