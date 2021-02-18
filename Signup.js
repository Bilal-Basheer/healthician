/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {Icon} from 'react-native-elements';

const App = (props) => {
  const [data, setData] = useState([]);
  const [password, setpassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState(false);

  const Valuepass = (firstname, lastname, password, number, email) => {
    //alert('this is working')
    fetch('http://082c367fb577.ngrok.io/videoflix/userlogindata', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body:
        'firstname=' +
        firstname +
        '&lastname=' +
        lastname +
        '$password=' +
        password +
        '$email=' +
        email +
        '$number=' +
        number,
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
  };
  return (
    <View style={{backgroundColor: '#009069', flex: 1}}>
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
            name="arrow-left"
            style={{
              fontSize: 24,
              color: 'white',
              marginTop: 22,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{
          height: 100,
          width: 100,
          position: 'absolute',
          zIndex: 1,
          top: 20,
          left: 160,
        }}
        source={require('./Images/logo.png')}
      />
      <ScrollView style={style.scrol_container}>
        <View>
          <Text
            style={{
              fontSize: 38,
              color: 'white',
              marginTop: 30,
            }}>
            Create Account
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', width: '90%'}}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                  fontSize: 18,
                }}>
                FIRSTNAME
              </Text>
              <TextInput
                style={style.text_input_style}
                placeholder="First Name"
                placeholderTextColor="gray"
                onChangeText={(firstname) => setfirstname(firstname)}
                value={firstname}
              />
            </View>
            <View style={{width: '50%', marginLeft: 15}}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                  fontSize: 18,
                }}>
                LASTNAME
              </Text>
              <TextInput
                style={style.text_input_style}
                placeholder="Last Name"
                placeholderTextColor="gray"
                onChangeText={(lastname) => setlastname(lastname)}
                value={lastname}
              />
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              left: 20,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 18,
            }}>
            EMAIL
          </Text>
          <TextInput
            style={style.text_input_style}
            placeholder="ex. bilalbasheer@mail.com"
            placeholderTextColor="gray"
            onChangeText={(email) => setemail(email)}
            value={email}
          />
          <View style={{flexDirection: 'row', width: '90%'}}>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                  fontSize: 18,
                }}>
                MOBILE
              </Text>
              <TextInput
                style={style.text_input_style}
                placeholder="+ 92"
                placeholderTextColor="gray"
                onChangeText={(number) => setnumber(number)}
                value={number}
              />
            </View>
            <View style={{width: '65%', marginLeft: 15, top: 40}}>
              <TextInput
                style={[style.text_input_style, style.mobile_top]}
                placeholder="332 0807250"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              left: 20,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 18,
            }}>
            PASSWORD
          </Text>
          <TextInput
            style={style.text_input_style}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(password) => setpassword(password)}
            value={password}
          />
          <View
            style={{flexDirection: 'row', alignSelf: 'flex-start', left: 25}}>
            <Text style={style.message_style}>
              By Clicking on Register, I accept the{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  style.term_and_condition_style,
                  style.forgotten_password,
                ]}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.touch_able_opecity_style}
            onPress={() => Valuepass(username, password)}>
            <Text style={style.login_text_style}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  scrol_container: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image_container: {
    marginTop: 50,
    alignSelf: 'center',
    borderRadius: 100,
  },
  text_input_style: {
    width: '90%',
    height: 40,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: 'white',
    fontSize: 18,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  term_and_condition: {
    marginLeft: 50,
  },
  touch_able_opecity_style: {
    backgroundColor: '#567f5f',
    alignItems: 'center',
    width: '90%',
    height: 40,
    paddingTop: 15,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  login_text_style: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    top: -10,
  },
  use_as_a_guest_text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  create_new_account_style: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingTop: 15,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  create_new_account_text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    top: -4,
  },
  term_and_condition_style: {
    marginTop: 30,
    fontWeight: 'bold',
    color: '#567f5f',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  message_style: {
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },
  mobile_top: {
    width: '100%',
  },
});
export default App;
