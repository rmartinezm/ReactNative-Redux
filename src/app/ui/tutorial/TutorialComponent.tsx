import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';

export default class TutorialComponent extends Component<any> {
  
  static navigationOptions = {
    header: null
  }

  private _didFocusSubscription: any;

  constructor(props: any) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', (_: any) =>
      BackHandler.addEventListener('hardwareBackPress', () => true)
    );
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
  }

  render() {
    return (
      <View>
        <Text>Tutorial</Text>
      </View>
    );
  }
}