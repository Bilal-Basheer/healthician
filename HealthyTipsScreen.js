import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Caption, Paragraph, Searchbar} from 'react-native-paper';

const HealthyTipsScreen = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      fatchData = () => {
        fetch('http://082c367fb577.ngrok.io/videoflix/getallhealthytips', {
          method: 'POST',
          headers: 'application/x-www-form-urlencoded',
          body: '',
        })
          .then((response) => response.json())
          .then((responseJson) => {
            setData(responseJson);
            console.log('===responseJson===', responseJson);
          })
          .catch((error) => {
            setError(error);
            console.log('===error===', error);
          });
      };
      fatchData();
      // console.log('this is data');
      // console.log(data);
      // console.log('this is data end');
    });
  }, []);
  const callVideoURL = (value) => {
    //alert(value);
    Linking.openURL(value);
  };
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
        <Text
          style={{color: 'white', alignSelf: 'center', left: 90, fontSize: 28}}>
          HEALTHY TIPS
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                // borderWidth: 1,
                height: 200,
                width: '95%',
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() => callVideoURL(item.Health_vedio_link)}>
                <View
                  style={{
                    //borderWidth: 1,
                    height: 125,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={require('./Images/video_player.png')}
                    style={{
                      top: 35,
                      height: 50,
                      width: 50,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      zIndex: 22,
                    }}
                  />
                  <Image
                    source={{uri: item.Healthy_Full_Url_Pic}}
                    style={{
                      height: 123,
                      width: '100%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Title style={{marginTop: 5, color: 'black', fontWeight: 'bold'}}>
                {item.Health_vedio_title}
              </Title>

              <Caption style={{fontSize: 16, color: 'black'}}>
                {item.Health_vedio_sub_title}
              </Caption>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      {/* <WebView
        source={{
          uri: props.route.params.url,
        }}
        style={{flex: 1}}
      /> */}
    </View>
  );
};

export default HealthyTipsScreen;
