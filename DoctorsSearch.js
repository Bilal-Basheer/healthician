import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Linking,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Title, Caption, Paragraph, Searchbar} from 'react-native-paper';
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const DoctorsSearch = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchQueryOrigin, setSearchQueryOrigin] = useState([]);
  useEffect(() => {
    props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      fatchData = () => {
        fetch('http://082c367fb577.ngrok.io/videoflix/testingApi', {
          method: 'POST',
          headers: 'application/x-www-form-urlencoded',
          body: '',
        })
          .then((response) => response.json())
          .then((responseJson) => {
            setData(responseJson);
            setSearchQueryOrigin(responseJson);
            console.log('===responseJson===', responseJson);
          })
          .catch((error) => {
            setError(error);
            console.log('===error===', error);
          });
      };
      fatchData();
      console.log('this is data');
      console.log(data);
      console.log('this is data end');
    });
  }, []);
  const onChangeSearch = (text) => {
    setSearchQuery(text);
    //console.log(text);
    const newData = searchQueryOrigin.filter((item) => {
      //console.log('========================================');
      const itemData = `${item.Doc_first_name.toUpperCase()}   
          ${item.Doc_last_name.toUpperCase()}
          ${item.Doc_academic_title.toUpperCase()} `;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    //console.log(newData);
    setData(newData);
  };
  const makeCall = (value) => {
    console.log(value);
    let phone_value = value;
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:' + phone_value;
    } else {
      phoneNumber = 'telprompt:' + phone_value;
    }
    Linking.openURL(phoneNumber);
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
            name="arrow-back"
            color="#fff"
            style={{marginTop: 22, marginLeft: 20}}
          />
        </TouchableOpacity>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => onChangeSearch(text)}
          value={searchQuery}
          style={{width: '80%', left: 15, height: 50, top: 10}}
        />
      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              left: 15,
              fontWeight: 'bold',
            }}>
            Your Search Is Here
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  //source={item.Doc_Full_Url_Pic}
                  source={{uri: item.Doc_Full_Url_Pic}}
                  style={{height: 60, width: 60, borderRadius: 10}}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>
                    {item.Doc_first_name} {item.Doc_last_name}
                  </Title>

                  <Caption style={styles.caption}>
                    {item.Doc_academic_title}
                  </Caption>
                  <View style={styles.row}>
                    <View style={styles.section}>
                      <Caption style={styles.caption}>
                        {item.Doc_specilization}
                      </Caption>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[styles.touch_able_opecity_style]}
                  //onPress={() => Get_Dr_Id(item.Doc_list_id)}
                  onPress={() => {
                    props.navigation.navigate('DoctorProfileScreen', {
                      value: item.Doc_list_id,
                    });
                  }}>
                  <Text style={styles.login_text_style}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch_able_opecity_style}
                  onPress={() => makeCall(item.Doc_phone_no)}>
                  <Text style={styles.login_text_style}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch_able_opecity_style_with_color}>
                  <Text style={styles.login_text_style}>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={({cat}, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};

export default DoctorsSearch;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: 'white',
    paddingLeft: 3 * vh,
    width: '95%',
    borderWidth: 0.1,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.67,
    elevation: 4,
  },
  image_container: {
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  caption: {
    fontSize: 18,
    color: 'gray',
    top: 5,
  },
  touch_able_opecity_style: {
    alignItems: 'center',
    marginRight: 10,
    width: '30%',
    height: 40,
    paddingTop: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    left: -3,
  },
  touch_able_opecity_style_with_color: {
    alignItems: 'center',
    backgroundColor: 'red',
    marginRight: 10,
    width: '30%',
    height: 40,
    paddingTop: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    left: -3,
  },
  login_text_style: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    top: -5,
  },
  row: {
    marginTop: 0.2 * vh,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: 1 * vh,
  },
  row_expr_like: {
    marginTop: 1.5 * vh,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: 1 * vh,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 1.5 * vh,
  },
  section_button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 1 * vw,
  },
  drawerSection: {
    marginTop: 1.5 * vh,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  // text_input_style: {
  //     width: '70%',
  //     height: 50,
  //     borderRadius: 8,
  //     marginTop: 10,
  //     backgroundColor: 'white',
  //     fontSize: 18,
  //     paddingLeft: 15,
  //     borderWidth: 1,
  //     borderColor: 'gray',
  //     position: 'absolute',
  //     zIndex: 2,
  //     top: 30,
  //     left: 60
  //   },
});
