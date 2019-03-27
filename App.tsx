import React, {Component} from 'react';
import { View } from 'react-native';
// Redux
import { Provider } from 'react-redux';
import configureStore from './src/app/store/ConfigureStore';
const store = configureStore();

export default class App extends Component<any> {
  
  render() {
    return (
      <Provider store={store}>
        <View></View>
      </Provider>
    );
  }

}