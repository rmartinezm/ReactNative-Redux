import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App.tsx';
// Redux
import { Provider } from 'react-redux';
import configureStore from './src/app/store/ConfigureStore';
const store = configureStore();

class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Root)
