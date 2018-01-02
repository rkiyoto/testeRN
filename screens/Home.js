import React, {Component} from 'react';
import {View,
        Image,
        Button,
        Text,
        StyleSheet,
        Alert,
        FlatList,
        TouchableOpacity,
        TouchableNativeFeedback
} from 'react-native';
import {Navigation} from 'react-native-navigation';

let titulo

export class Home extends Component {

    static navigatorButtons = {

      leftButtons: [
        {
          id: 'settings',
          buttonColor: '#ffffff',
          icon: require('../images/buttonSandwich/buttonSandwich.png')
        }
      ],
      rightButtons: [
        {
          id: 'camera',
          buttonColor: '#ffffff',
          icon: require('../images/iconPlus/iconPlus.png')
        }
      ]
    };


  constructor(props){
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'settings') { // this is the same id field from the static navigatorButtons definition
          this.props.navigator.push({
          screen: 'teste.Settings',
          title: 'Settings',
          animated: true,
          animationType: 'fade', // does the push have transition animation or does it happen immediately (optional)
          navigatorStyle: {
            screenBackgroundColor: 'rgb(255,255,255)',
            drawUnderNavBar: true,
            statusBarColor: "rgb(0,157,159)",
            navBarTextColor: '#ffffff',
            navBarButtonColor: '#FFFFFF',
          navBarBackgroundColor: 'rgba(0,157,159, 0.95)'}
        })
      }
      if (event.id == 'camera') {
        this.props.navigator.push({
        screen: 'teste._Camera',
        title: 'Camera',
        animated: true, // does the push have transition animation or does it happen immediately (optional)
        navigatorStyle: {
          screenBackgroundColor: 'black',
          navBarButtonColor: '#FFFFFF',
          navBarHidden: true,
          drawUnderNavBar: false,
          navBarTranslucent: true,
          navBarTextColor: '#ffffff',
          statusBarHidden: true,
          navBarBackgroundColor: 'rgb(0,175,159)'}
        })
      }
    }
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
  };

  _expandView = () => {
    this.props.navigator.push({
      screen: 'teste.ExpandedView',
      title: "ExpandedView",
      animated: true,
      animationType: 'fade', // does the push have transition animation or does it happen immediately (optional)
      navigatorStyle: {
        screenBackgroundColor: 'rgb(255,255,255)',
        drawUnderNavBar: false,
        statusBarColor: "rgb(0,157,159)",
        navBarTextColor: '#ffffff',
        navBarButtonColor: '#FFFFFF',
      navBarBackgroundColor: 'rgba(0,157,159, 0.95)'}
    })
  };

  _renderCell = ({item}) => (
    <View style={styles.itemCell}>
      <View style={styles.viewTopBar}>
          <View style={styles.itemDate}>
            <Text style={{color: 'rgb(0,157,159)', fontSize: 30, paddingLeft: 5}}>{item.dia}</Text>
          </View>

          <View style={styles.itemDate}>
            <Text style={{color: 'rgb(0,157,159)', fontSize: 12}}>{item.mes}</Text>
            <Text style={{color: 'rgb(0,157,159)', fontSize: 12}}>{item.ano}</Text>
          </View>


          <View style={{flex:1}}>
            <Text style={styles.itemTitle}>{item.key}  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>

          <View style={{justifyContent: 'center', width: 50}}>
            <TouchableOpacity
              onPress={titulo = "teste",
                this._expandView}>
              <Image
                source={require('../images/iconMore/iconMore.png')}
              />
            </TouchableOpacity>
          </View>
      </View>

      <FlatList
        style={{backgroundColor: '#f0f0f0', marginLeft: 80}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          {key: 'Img1'},
          {key: 'Img2'},
          {key: 'Img3'},
          {key: 'Img4'},
          {key: 'Img5'},
          {key: 'Img6'},
          {key: 'Img7'},
          {key: 'Img8'},

      ]}
      renderItem={ ({item}) =>
        <Image
        style={{margin: 3, width: 100, height: 100, alignItems: 'center', borderRadius: 3}}
        /*tintColor= '#00838f'*/
        source={require('../images/logo.png')}
        />
      }
      />

      </View>
  );

  render() {
    return(
    <FlatList style={styles.viewStyle}
              data={[
                {key: '1.',
                 dia: '18', mes: 'JUL', ano: '2017'},
                {key: '2.',
                 dia: '19', mes: 'JUL', ano: '2017'},
                {key: '3.',
                 dia: '20', mes: 'JUL', ano: '2017'},
                {key: '4.',
                 dia: '21', mes: 'JUL', ano: '2017'},
                {key: '5.',
                 dia: '22', mes: 'JUL', ano: '2017'},
                {key: '6.',
                 dia: '23', mes: 'JUL', ano: '2017'},
                {key: '7.',
                 dia: '24', mes: 'JUL', ano: '2017'},
              ]}

              renderItem={this._renderCell}
            />
          );
        }
}


const styles = StyleSheet.create({
  viewTopBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ffffff'
  },

  itemCell: {
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    height: 160
  },

  itemDate: {
    backgroundColor: '#ffffff',
    width: 40,
    justifyContent: 'center',
    paddingLeft: 5
  },

  itemTitle: {
    flex:1,
    textAlignVertical: 'center',
    height: 28,
    fontSize: 14,
    color: 'rgb(150,150,150)'
  },

  flatListStyle: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },

  viewStyle: {
    backgroundColor: '#ffffff',
    marginTop: 60,
    margin: 1,
  }
});


/*      <View style={{flexDirection: 'row', paddingLeft: 100}}>
        <Image
          source={require('../images/logo.png')}
        />
        <Image
          source={require('../images/logo.png')}
        />
        <Image
          source={require('../images/logo.png')}
        />

      </View>*/
