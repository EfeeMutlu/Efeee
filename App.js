import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';

import Router from './src/Router';
//import bgImage from './bg.jpg';

const App=() => {
    return (
        <Router/>
       /* <ImageBackground source={bgImage} style={styles.container}>
          <TouchableOpacity style={styles.toucStyle}
            onPress={() => alert('tıkladın')}>
              <Text>---</Text>
          </TouchableOpacity>
         <TouchableOpacity style={styles.toucStyle}
         onPress={() => alert ('kaşmerler ')}>
         <Image 
         source={require('./buton2.png')}
         resizeMode='center'
         />
         </TouchableOpacity>
        </ImageBackground>*/
    );
};
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'gray',
   /* alignItems:'center',
    justifyContent:'center'*/
  },

  /*toucStyle:{
    width:100,
    height:30,
    //backgroundColor:'orange',
    marginTop:20,
    opacity:0.9,
    justifyContent:'center',
    alignItems:'center'
  }*/
});

export default App;
