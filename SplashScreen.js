import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {setUserdata,getUserdata, resetUserdata} from "./utils"
const SplashScreen = (props) => {
  const [Isfirstlaunch, setIsfirstlaunch] = useState(null);
  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then((value) => {
  //     if (value == null) {
  //       AsyncStorage.setItem('alreadyLaunched', 'true');
  //       setIsfirstlaunch(true);
  //     } else {
  //       setIsfirstlaunch(false);
  //     }
  //   });
  // }, []);
  // if (Isfirstlaunch == null) {
  //   return null;
  // } else if (Isfirstlaunch == true) {
  //   return (
  //      setTimeout(() => {
  //      props.navigation.navigate('IntroScreen');
  //    })
  //   );
  // } else {
  //  return props.navigation.navigate('Dashboard');
  // }
  useEffect(() => {
// getUserdata((data)=>{alert(JSON.stringify(data));},()=>{alert("user data not found")})
// setUserdata({name:"bilal"},()=>{})
// resetUserdata();
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsfirstlaunch(true);
        console.log('first if', Isfirstlaunch);
      } else {
        setIsfirstlaunch(false);
        console.log('first else if hljkasdhlfasdjhlf', Isfirstlaunch);
      }
    });
  }, []);
  setTimeout(() => {
    if (Isfirstlaunch == null) {
      return null;
    } else if (Isfirstlaunch == true) {
      return props.navigation.navigate('IntroScreen');
    } else {
      return props.navigation.navigate('Dashboard');
    }
  }, 3000);
  return (
    <View
      style={{flex: 1, backgroundColor: '#009069', justifyContent: 'center'}}>
      <Image
        style={{height: 300, width: 300, alignSelf: 'center'}}
        source={require('./Images/logo.png')}
      />
      <Text
        style={{fontSize: 34, textAlign: 'center', color: 'white', top: 130}}>
        HEALT{''}
        <Text style={{color: '#009069', backgroundColor: 'white'}}>ATION</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
