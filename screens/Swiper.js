import React, {Component} from 'react';
import {View,
        Image,
        Text,
        StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export class SwiperView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.backgroundView}>
        <Text> E ai meu chapa </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    flex:1,
    backgroundColor: 'skyblue'
  },

})
