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
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {Icon} from 'react-native-elements';
const App = () => {
  const [isSelected, setSelected] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const Valuepass = (username, password) => {
    Alert.alert(username + '   ' + password);
    fetch('http://082c367fb577.ngrok.io/videoflix/userlogindata', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'username=' + username + '&password=' + password,
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
        <TouchableOpacity>
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
      <ScrollView style={style.scrol_container}>
        <View>
          <Text
            style={{
              fontSize: 38,
              color: 'white',
              marginTop: 30,
            }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              marginTop: 20,
              left: 20,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 18,
            }}>
            USERNAME
          </Text>
          <TextInput
            style={style.text_input_style}
            placeholder="Email Address"
            placeholderTextColor="gray"
            onChangeText={(username) => setUsername(username, password)}
            value={username}
          />
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
            onChangeText={(password) => setPassword(password)}
          />
          <Text style={style.message_style}>
            Hum yahn py koi b massage print karwa skty.
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* <CheckBox
              style={{top: 22}}
              disabled={false}
              value={isSelected}
              onValueChange={(newValue) => setSelected(newValue)}
            /> */}
            <Text style={[style.forgotten_style, style.remember_me]}>
              Remember Me
            </Text>
            <TouchableOpacity>
              <Text style={[style.forgotten_style, style.forgotten_password]}>
                Forgot username / password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.touch_able_opecity_style}
            onPress={() => Valuepass(username, password)}>
            <Text style={style.login_text_style}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={style.create_new_account_style}>
            <Text style={style.create_new_account_text}>
              CREATE YOUR NEW ACCOUNT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.use_as_a_guest_text}>USE AS A GUEST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    </View>
  );
};

const style = StyleSheet.create({
  scrol_container: {
    width: '95%',
    alignSelf: 'center',
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
  remember_me: {
    marginRight: 20,
  },
  forgotten_password: {
    marginLeft: 50,
  },
  touch_able_opecity_style: {
    backgroundColor: '#009069',
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
  forgotten_style: {
    marginTop: 30,
    fontWeight: 'bold',
    color: '#567f5f',
    fontSize: 16,
  },
  message_style: {
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});
export default App;
