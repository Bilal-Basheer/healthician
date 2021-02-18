import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Title, Caption, Paragraph, Searchbar} from 'react-native-paper';

const DoctorProfileScreen = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  //const {value} = route.params;
  console.log('========================');
  let user_profile_id = props.route.params.value;
  console.log(user_profile_id);
  console.log('========================');
  useEffect(() => {
    props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      fetch('http://082c367fb577.ngrok.io/videoflix/getdrprofile', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: 'user_id=' + user_profile_id,
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          setData(responseJson);
          console.log('===responseJson===', responseJson);
        })
        .catch((error) => {
          setError(error);
          console.log('===error===', error);
        });
    });
  }, []);
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
            props.navigation.navigate('Dashboard');
          }}>
          <Icon
            name="arrow-back"
            color="#fff"
            style={{marginTop: 22, marginLeft: 20}}
          />
        </TouchableOpacity>
        <Text
          style={{color: 'white', alignSelf: 'center', left: 110, fontSize: 28}}>
          PROFILE
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <View style={{height: 225, backgroundColor: '#009069'}}>
              <Text
                style={{
                  fontSize: 30,
                  alignSelf: 'center',
                  color: '#fff',
                }}>
                Dr. {item.Doc_first_name} {item.Doc_last_name}
              </Text>
              <Image
                source={{uri: item.Doc_Full_Url_Pic}}
                style={{
                  height: 180,
                  width: 180,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
            <ScrollView
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Title
                  style={{marginTop: 20, color: 'black', fontWeight: 'bold'}}>
                  Education
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {' '}
                  ● {item.Doc_academic_title}
                </Caption>
                <Title
                  style={{marginTop: 30, color: 'black', fontWeight: 'bold'}}>
                  Institution
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {' '}
                  ● {item.Doc_institution}
                </Caption>
                <Title
                  style={{marginTop: 30, color: 'black', fontWeight: 'bold'}}>
                  Specilization
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {' '}
                  ● {item.Doc_specilization}
                </Caption>
                <Title
                  style={{marginTop: 30, color: 'black', fontWeight: 'bold'}}>
                  Clinic
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {' '}
                  ● {item.Doc_Clinic}
                </Caption>
                <Title
                  style={{marginTop: 30, color: 'black', fontWeight: 'bold'}}>
                  Address
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {' '}
                  ● {item.Doc_city} {item.Doc_State}
                </Caption>
                <Title
                  style={{marginTop: 30, color: 'black', fontWeight: 'bold'}}>
                  Discription
                </Title>

                <Caption style={{fontSize: 16, color: 'black'}}>
                  {'     '}
                  {item.Doc_Discription}
                </Caption>
              </View>
            </ScrollView>
          </View>
        )}
        keyExtractor={({cat}, index) => index.toString()}
      />
    </View>
  );
};

export default DoctorProfileScreen;
