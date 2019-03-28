import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashComponent from './src/app/ui/splash/SplashComponent';
import TutorialComponent from './src/app/ui/tutorial/TutorialComponent';
import Route from './src/app/model/enum/Route';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashComponent },
  Tutorial: { screen: TutorialComponent }
}, {
  initialRouteName: Route.SPLASH,
  headerMode: 'screen' 
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;