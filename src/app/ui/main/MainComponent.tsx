import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import Style from '../../BaseStyleSheet';
import Route from '../../model/enum/Route';

class MainComponent extends Component<any> {
    
    static navigationOptions = {
        title: 'Main',
        headerLeft: null
    }
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => false);
    }
  
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', () => {});
    }
    
    private naviageTo(route: Route){
        this.props.navigation.navigate(route);
    }
  
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>MAIN</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);