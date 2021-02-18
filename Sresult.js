import React from 'react';
import {Image, View} from 'react-native';

const Sresult = () => {
  const images = 'https://source.unsplash.com/user/erondu/1600x900';
  //console.log(images);
  return (
    <View style={{flex: 1}}>
      <Image
        source={{
          uri: {images},
        }}
        // source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
        // }}
        style={{height: 200, width: 125}}
      />
    </View>
  );
};

export default Sresult;
