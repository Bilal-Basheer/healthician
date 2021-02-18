import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';
//import Login from './Login';
const Dashboard = (props) => {
  const [active, setActive] = useState(0);
   const [data, setData] = useState([]);
   const [error, setError] = useState(true);
  useEffect(() => {
    // props.navigation.addListener('focus', () => {
    //   // The screen is focused
    //   // Call any action
    //   alert("this is alert")
    // });
    fatchData = () => {
      fetch('http://082c367fb577.ngrok.io/videoflix/getnewsandupdates', {
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
    console.log('this is data');
    console.log(data);
    console.log('this is data end');
  }, []);
  const callLinkURL = (value) => {
    //alert(value);
    Linking.openURL(value);
  };
  // const Product_detail = [
  //   {cat: 1, cat_name: '1st', cat_quantity: 10},
  //   {cat: 2, cat_name: '2nd', cat_quantity: 15},
  //   {cat: 3, cat_name: '3rd', cat_quantity: 105},
  //   {cat: 4, cat_name: '4th', cat_quantity: 16},
  //   {cat: 5, cat_name: 'A', cat_quantity: 16},
  //   {cat: 6, cat_name: 'B', cat_quantity: 16},
  //   {cat: 7, cat_name: 'C', cat_quantity: 16},
  //   {cat: 8, cat_name: 'D', cat_quantity: 16},
  //   {cat: 9, cat_name: 'E', cat_quantity: 16},
  // ];
  const images = [
    {image: require('./Images/21.jpg')},
    {image: require('./Images/2.jpg')},
    {image: require('./Images/3.jpg')},
    {image: require('./Images/4.jpg')},
    {image: require('./Images/5.jpg')},
    {image: require('./Images/6.jpg')},
    {image: require('./Images/7.jpg')},
    {image: require('./Images/8.jpg')},
    {image: require('./Images/9.jpg')},
    {image: require('./Images/10.jpg')},
    {image: require('./Images/11.jpg')},
    {image: require('./Images/12.jpg')},
    {image: require('./Images/13.jpg')},
    {image: require('./Images/14.jpg')},
    {image: require('./Images/15.jpg')},
    {image: require('./Images/16.jpg')},
    {image: require('./Images/17.jpg')},
    {image: require('./Images/18.jpg')},
    {image: require('./Images/19.jpg')},
    {image: require('./Images/20.jpg')},
  ];
  const option2 = () => {
    props.navigation.navigate('CovidScreen', {url: 'https://www.who.int/'});
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
            props.navigation.openDrawer();
          }}>
          <Icon
            name="menu"
            color="#fff"
            style={{marginTop: 22, marginLeft: 20}}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Icon
            name="search"
            color="#fff"
            style={{marginTop: 22, marginLeft: 40, paddingLeft: 270}}
          />
        </TouchableOpacity> */}
      </View>
      <View style={{width: '95%', height: '30%', alignSelf: 'center'}}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{width: 387}}>
          {images.map((item, index) => (
            <Image
              key={index}
              source={item.image}
              style={{
                width: 387,
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'cover',
                borderRadius: 20,
              }}
            />
          ))}
        </ScrollView>
        {/* <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
          }}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k==active ? style.pageactive : style.pageadective}>
              ⬤
            </Text>
          ))}
        </View> */}
      </View>
      <View
        style={{
          width: '100%',
          padding: 5,
          height: '37%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{width: '40%', height: 120, margin: 5}}
          onPress={() => {
            props.navigation.navigate('DoctorsSearch');
          }}>
          <View style={{width: '100%', height: 120, backgroundColor: '#fff'}}>
            <View style={style.image_container}>
              {
                <Image
                  style={{height: 70, width: 70}}
                  source={require('./Images/doctors_logo.png')}
                />
              }
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginTop: 0,
              }}>
              Doctor's
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '40%', height: 120, margin: 5}}
          onPress={() => {
            props.navigation.navigate('MapScreen');
          }}>
          <View style={{width: '100%', height: 120, backgroundColor: '#fff'}}>
            <View style={style.image_container}>
              {
                <Image
                  style={{height: 70, width: 70}}
                  source={require('./Images/location.png')}
                />
              }
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginTop: 0,
              }}>
              Locations
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '40%', height: 120, margin: 5}}
          onPress={() => option2()}>
          <View style={{width: '100%', height: 120, backgroundColor: '#fff'}}>
            <View style={style.image_container}>
              {
                <Image
                  style={{height: 60, width: 60}}
                  source={require('./Images/covid_logo.png')}
                />
              }
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginTop: 0,
              }}>
              Covid
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '40%', height: 120, margin: 5}}
          onPress={() => {
            props.navigation.navigate('HealthyTipsScreen');
          }}>
          <View style={{width: '100%', height: 120, backgroundColor: '#fff'}}>
            <View style={style.image_container}>
              {
                <Image
                  style={{height: 70, width: 70}}
                  source={require('./Images/healthy_tips.png')}
                />
              }
            </View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                marginTop: 0,
              }}>
              Healthy Tips
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: '98.7%', padding: 5, height: '40%'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                width: 200,
                height: 150,
                backgroundColor: '#fff',
                margin: 5,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => callLinkURL(item.New_And_Updates_full_URL)}>
                  <Image
                    style={{height: 100, width: 200}}
                    source={{uri: item.New_And_Updates_full_image_URL}}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                  marginTop: 15,
                }}>
                {item.New_And_Updates_title}'s
              </Text>
            </View>
          )}
          horizontal={true}
          keyExtractor={({cat}, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  image_container: {
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 100,
  },
  pageactive: {
    color: 'white',
    fontSize: 24,
  },
  pageadective: {
    color: '#888',
    fontSize: 24,
  },
});

export default Dashboard;
