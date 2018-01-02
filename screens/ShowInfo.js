import React, {Component} from 'react';
import {View,
        Text,
        Button,
        FlatList,
        StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';


export class ShowInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.viewBackground}>
        <Text style={{padding: 20, fontSize: 18.0, color: '#ffffff', backgroundColor: 'rgb(0,157,159)'}}> {this.props.nome} </Text>

          <View style={styles.infoCell}>
            <Text style={styles.infoLabel}>Email: </Text>
            <Text>{this.props.email}</Text>
          </View>

          <View style={styles.infoCell}>
            <Text style={styles.infoLabel}>Telefone: </Text>
            <Text>{this.props.telefone}</Text>
          </View>

          <View style={styles.infoCell}>
            <Text style={styles.infoLabel}>Sexo: </Text>
            <Text>{this.props.sexo}</Text>
          </View>

      </View>
    )
  }

}
const styles = StyleSheet.create({
  viewBackground: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignContent: 'center'
  },

  infoLabel: {
    fontSize: 14.0,
    color: 'rgb(0,157,159)',
    width: 70,
    textAlign: 'right',
    paddingRight: 10
  },

  infoCell: {
    flexDirection: 'row',
    padding: 10.0,
    backgroundColor: 'white'
}

})
