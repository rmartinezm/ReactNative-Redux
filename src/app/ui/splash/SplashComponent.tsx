import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Style from '../../BaseStyleSheet';
import Route from '../../model/enum/Route';

class SplashComponent extends Component<any> {

  static navigationOptions = {
    header: null
  }

  private naviageTo(){
    setTimeout(() => this.props.navigation.navigate(Route.TUTORIAL), 3000);
  }

  render() {
    this.naviageTo();
    console.log(this.props);
    return (
      <View style={Style.fullScreen}>
        <Image source={require('../../../assets/img/gas_logo.png')} style={Style.fullScreen}/>
      </View>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
      loading: state.user.loading,
      error: state.user.error,
      user: state.user.user
  };
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent);