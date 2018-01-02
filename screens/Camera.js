import React, { Component } from 'react';
import {
  Alert,
  View,
  Text
} from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {Navigation} from 'react-native-navigation';


export class _Camera extends Component {


    onBottomButtonPressed(event) {
      const captureImages = JSON.stringify(event.captureImages);
      this.props.navigator.pop()
      Alert.alert(
        `${event.type} button pressed`,
        `${captureImages}`,
        [
          { text: 'OK', onPress: () => {} },
        ],
        { cancelable: false }
      )
    }

  render() {
    return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
    <CameraKitCameraScreen style={{
          flex: 1,
          backgroundColor: '#000000'
        }}
      actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
      onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
      flashImages={{
        on: require('./../images/flashOn.png'),
        off: require('./../images/flashOff.png'),
        auto: require('./../images/flashAuto.png')
      }}
      cameraFlipImage={require('./../images/cameraFlipIcon.png')}
      captureButtonImage={require('./../images/cameraButton.png')}
    />
    </View>

    );
  }
}
