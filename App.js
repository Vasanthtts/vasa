import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComonentsScreen from './app/Components'
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ImageScreen from './src/screens/Image';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Comp : ComonentsScreen,
    Login : LoginScreen,
    Register : RegisterScreen,
    Image : ImageScreen,
    Counter : CounterScreen,
    Color : ColorScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'TTS',
    },
  }
);

export default createAppContainer(navigator);
