import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import Style from '../../BaseStyleSheet';
import TutorialStyle from './TutorialStyleSheet';


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

  /**
   * 
   */
  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
  }

  /**
   * 
   * @param pageCount 
   */
  _renderDotIndicator(pageCount: number) {
    return <PagerDotIndicator 
      dotStyle={{ ...Style.bgColorPrimaryDark, ...TutorialStyle.dot }} 
      selectedDotStyle={{ ...Style.bgColorAccent, ...TutorialStyle.dot }} 
      pageCount={pageCount} 
    />;
  }

  /**
   * 
   * @param title 
   * @param description 
   */
  public makeViewInformation(title: string, description: string){
    return (
      <View key={title} style={{ 
        flex: 1,
        flexDirection: 'column-reverse'
      }}>
        <Text style={TutorialStyle.DescriptionText}>{description}</Text>
        <Text style={TutorialStyle.TitleText}>{title}</Text>
      </View>
    );
  }

  render() {
    let pages = [
      this.makeViewInformation('Page One', 'Description page one, lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec tellus mollis, posuere magna id, ornare lectus.'),
      this.makeViewInformation('Page Two', 'Description page Two, lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec tellus mollis, posuere magna id, ornare lectus.'),
      this.makeViewInformation('Page Three', 'Description page Three, lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec tellus mollis, posuere magna id, ornare lectus.')
    ]
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: .1, flexDirection: 'row-reverse', alignItems: 'center' }}>
          <Text style={TutorialStyle.TextAsButton}>Saltar</Text>
        </View>
        <IndicatorViewPager style={{ flex: .9 }} indicator={this._renderDotIndicator(pages.length)}>
          {pages.map(it => it)}
        </IndicatorViewPager>
      </View>
    );
  }
}