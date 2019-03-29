import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashComponent from './src/app/ui/splash/SplashComponent';
import TutorialComponent from './src/app/ui/tutorial/TutorialComponent';
import Route from './src/app/model/enum/Route';
import MainComponent from './src/app/ui/main/MainComponent';

const AppNavigator = createStackNavigator({
  Splash: { screen: SplashComponent },
  Tutorial: { screen: TutorialComponent },
  Main: { screen: MainComponent },
}, {
  initialRouteName: Route.SPLASH,
  headerMode: 'screen' 
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;