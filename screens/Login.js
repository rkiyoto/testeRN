import React, {Component} from 'react';
import {View,
        Image,
        Button,
        Text,
        StyleSheet,
        Alert,
        Vibration,
        TextInput
} from 'react-native';

import {Navigation} from 'react-native-navigation';

export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      login: '',
      senha: ''
    };

  }

  render() {
    return(
    <View style={styles.viewStyle}>
      <View style={{alignItems:'center', paddingBottom: 50}}>
        <Image
          style={{width: 200, height: 200}}
          tintColor='white'
          source={require('../images/transparent_logo.png')}
        />
      </View>

      <TextInput
              style={{height: 40, fontSize: 15.0}}
              placeholder="Login"
              multiline={false}
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='rgba(0,255,255,0.3)'
              placeholderTextColor='rgba(0,255,255,0.3)'
              keyboardType='email-address'
              onChangeText= {(text) => this.setState({login: text})}
      />

      <TextInput
              style={{height: 40, fontSize: 15.0}}
              placeholder="Senha"
              multiline={false}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid='rgba(0,255,255,0.3)'
              placeholderTextColor='rgba(0,255,255,0.3)'
              keyboardType='email-address'
              onChangeText= {(text) => this.setState({senha: text})}
      />


      <Button
      style={{padding: 10}}

        onPress={() => {
            Navigation.startSingleScreenApp({
              screen: {
                screen: 'teste.Home',
                title: 'Home',
                animated: true, // does the push have transition animation or does it happen immediately (optional)
                animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
                navigatorStyle: {
                  drawUnderNavBar: true,
                  statusBarColor: 'rgba(0,157,159, 0.95)',
                  navBarTextColor: '#ffffff',
                  navBarButtonColor: '#FFFFFF',
                navBarBackgroundColor: 'rgba(0,157,159, 0.95)'}
              }
            });
          }
        }
        /*disabled={(this.state.login && this.state.senha)? false : true } */
        title="Login"
        color="rgb(0,120,129)"

      />
    </View>
  );
  }


}

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    backgroundColor: 'rgba(0,50,50,0.9)',
    padding: 50
  },

  viewCampos: {
    backgroundColor: 'white'
  },

});
