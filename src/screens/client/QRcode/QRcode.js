import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';

import {
  PermissionsAndroid,
  StyleSheet,
  Linking,
  Text,
  View,
  Image,
} from 'react-native';

const askPermission = async () =>{     
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
         if(granted != 'granted')
         {
          Linking.openSettings();
         }
         alert("Vous avez déja accés au camera !"); 
}


export default class App extends React.Component
{

  render(){
  return (
    <View style={styles.container} >
        <Image
        source={require('../../../assets/images/QRcode/e_kaly.png')}
        style={styles.image}
      />
        <QRCodeScanner
            ref={(node) => { this.scanner = node }}
           onRead = {({data}) => alert(data)}
           //flashMode={RNCamera.Constants.FlashMode.torch}
           style= {styles.camera}
        /> 

        {/*Bouton requete acces */}
        <View style={styles.request} onPress={this.handleButtonPress}>
            <Text onPress={askPermission} style={styles.text} >Request Permission</Text>
        </View>
    </View>
  )
  }

}

handleButtonPress = () => {
  // Change the button color when pressed
  this.setState({ buttonColor: 'red' });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: 'white',
  },
  text: {
      fontSize:18,

  },
  ekaly: {
    marginTop:45,
    fontSize:40,
    color:'#A40E2A',
  },
  request: {
    borderStyle: 'solid',
    borderRadius: 10,
    height:70,
    backgroundColor: '#A40E2A',
    width: 200,  
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:45,
  },
  image:{
    marginTop:10,
    width:300,
    height : 100,
  },
  circle_1:{

  },
});
