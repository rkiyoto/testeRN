import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Picker,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      sexo: 'Masculino'
    };
  }

  _alert = () => {
    Alert.alert(
      'Ops',
      'Ainda nao implementado',
      [
        {text: 'Beleza.', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }

  _submit = () => {
    this.props.navigator.push({
    screen: 'teste.ShowInfo',
    title: 'ShowInfo',
    animated: true,
    animationType: 'fade', // does the push have transition animation or does it happen immediately (optional)
    passProps: {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      sexo: this.state.sexo
    },
    navigatorStyle: {
      screenBackgroundColor: 'rgb(255,255,255)',
      drawUnderNavBar: false,
      statusBarColor: "rgb(0,157,159)",
      navBarTextColor: '#ffffff',
      navBarButtonColor: '#FFFFFF',
    navBarBackgroundColor: 'rgba(0,157,159, 0.95)'}})
  }

  render() {
    return(
        <KeyboardAwareScrollView style={styles.viewBackground}>

        <View style={{alignItems:'center', backgroundColor: 'white', paddingTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigator.push({
              screen: 'teste._Camera',
              title: 'Camera',
              animated: true, // does the push have transition animation or does it happen immediately (optional)
              navigatorStyle: {
                screenBackgroundColor: 'black',
                navBarButtonColor: '#FFFFFF',
                navBarHidden: true,
                drawUnderNavBar: true,
                navBarTranslucent: true,
                navBarTextColor: '#ffffff',
                statusBarHidden: true,
                navBarBackgroundColor: 'rgb(0,175,159)'}
              })
            }}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../images/avatar.png')}
            />
          </TouchableOpacity>
        </View>

          <View style={styles.viewCell}>
              <Text style={styles.textSettings}>Nome</Text>
              <TextInput
                      style={{flex: 1, height: 40, fontSize: 15.0}}
                      placeholder="Nome completo"
                      multiline={true}
                      autoCapitalize='words'
                      underlineColorAndroid='#eeeeee'
                      onChangeText= {(text) => this.setState({nome: text})}
              />
          </View>

          <View style={styles.viewCell}>
            <Text style={styles.textSettings}> Email</Text>
            <TextInput
                    style={{flex: 1, height: 40, fontSize: 15.0}}
                    placeholder="Email"
                    multiline={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid='#eeeeee'
                    keyboardType='email-address'
                    onChangeText= {(text) => this.setState({email: text})}

            />
          </View>

          <View style={styles.viewCell}>
            <Text style={styles.textSettings}> Telefone</Text>
            <TextInput
                    style={{flex: 1, height: 40, fontSize: 15.0}}
                    placeholder="Telefone"
                    multiline={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid='#eeeeee'
                    keyboardType='phone-pad'
                    onChangeText= {(text) => this.setState({telefone: text})}

            />
          </View>

          <View style={{flexDirection:'row', backgroundColor: '#ffffff', padding: 15, alignItems: 'center'}}>
            <Text style={styles.textSettings}> Sexo</Text>

            <Picker style={styles.pickerStyle}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({sexo:itemValue})}
            >
              <Picker.Item color='rgb(0,70,80)' label="Feminino" value="Feminino" />
              <Picker.Item color='rgb(0,70,80)'   label="Masculino" value="Masculino" />
            </Picker>
          </View>

          <Button
            onPress={this._submit}
            title='Enviar'
            color='rgb(0,157,159)'
            disabled={this.state.nome? false : true}
            />


        </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewBackground:{
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignContent: 'center',
    paddingTop: 60
  },

    viewCell:{
      flexDirection: 'row',
      padding: 15,
      backgroundColor: '#ffffff',
      alignContent: 'center'
    },

  textSettings: {
    fontSize: 14.0,
    color: 'rgb(0,157,159)',
    padding: 10,
    textAlign: 'right',
    width: 80
  },

  textInputs: {
    paddingLeft: 20.0,
    fontSize: 16.0,
    textAlign: 'left'
  },

  pickerStyle: {
    flex:1,
    backgroundColor: '#fafafa',
    color: '#555555'
  }

})
