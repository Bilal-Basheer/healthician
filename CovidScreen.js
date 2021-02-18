import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {Icon} from 'react-native-elements';

const CovidScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#009069',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon
            name="arrow-back"
            color="#fff"
            style={{marginTop: 22, marginLeft: 20}}
          />
        </TouchableOpacity>
        <Text style={{color:'white', alignSelf:'center', left:70, fontSize: 28}}>COVID-19 UPDATES</Text>
      </View>
      <WebView
        source={{
          uri: props.route.params.url,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

export default CovidScreen;
