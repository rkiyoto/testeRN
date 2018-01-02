import React, {Component} from 'react';
import {View,
        Text,
        Button,
        StyleSheet,
        FlatList,
        Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

let picture = require('../images/logo.png')

export class ExpandedView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.backgroundView}>
        <FlatList
          style = {styles.flatListStyle}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={[
            {key: '1'},
            {key: '2'},
            {key: '3'},
            {key: '4'},
            {key: '5'},
            {key: '6'},
            {key: '7'},
            {key: '8'},
            {key: '9'},
            {key: '10'},
            {key: '11'},
            {key: '12'},
            {key: '13'},
            {key: '14'},
            {key: '15'},
            {key: '16'},
            {key: '17'},
            {key: '18'},
            {key: '19'},
            {key: '20'},
            {key: '21'},
            {key: '22'},
            {key: '23'},
            {key: '24'},
          ]}
          renderItem={this._renderImage}
        />
      </View>
    );
  }

  _renderImage = () => (
    <Image
      style={{margin: 3, width: 110, height: 120, alignItems: 'center', borderRadius: 3}}
      /*tintColor= '#00838f'*/
      source={picture}
    />
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  flatListStyle: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f0f0f0',
  },


})
