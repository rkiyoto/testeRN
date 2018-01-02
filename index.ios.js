import  { Component } from 'react';
import { Navigation, Screen } from 'react-native-navigation';
import Swiper from 'react-native-swiper';

import {Login} from './screens/Login';
import {Home} from './screens/Home';
import {_Camera} from './screens/Camera';
import {Settings} from './screens/Settings';
import {ShowInfo} from './screens/ShowInfo';
import {ExpandedView} from './screens/expandedView';
import {SwiperView} from './screens/Swiper';

  Navigation.registerComponent('teste.Login', () => Login);
  Navigation.registerComponent('teste.Home' , () => Home);
  Navigation.registerComponent('teste._Camera', () => _Camera);
  Navigation.registerComponent('teste.Settings', () => Settings);
  Navigation.registerComponent('teste.ShowInfo', () => ShowInfo);
  Navigation.registerComponent('teste.ExpandedView', () => ExpandedView);
  Navigation.registerComponent('teste.SwiperView', () => SwiperView);

  var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
})

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})


Navigation.startSingleScreenApp({
  screen: {
    screen: 'teste.Login', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
    navBarHidden: true,
    statusBarColor: 'transparent',
    navBarBackgroundColor: 'rgb(0,157,159)',
    statusBarTextColorScheme: 'light'
  }
  }
});
