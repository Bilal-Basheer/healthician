import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Icon} from 'react-native-elements';
import {set} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 22,
    width: '100%',
  },
  map: {
    marginTop: 70,
    ...StyleSheet.absoluteFillObject,
  },
});

const MapScreen = (props) => {
  const [Lat_Long, setLat_Long] = useState({});
  const [Take_Lat, setTake_Lat] = useState(24.9620774120637);
  const [Take_Long, setTake_Long] = useState(67.22648809945622);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchQueryOrigin, setSearchQueryOrigin] = useState([]);
  const fatchData = (Take_Lat, Take_Long) => {
    alert(Take_Long + '=====' + Take_Long);
   useEffect(() => {
      fetch('http://082c367fb577.ngrok.io/videoflix/userlocation', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: 'Take_Lati=' + Take_Lat,
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
   }, [])
  };

  return (
    <View style={styles.container}>
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
      </View>
      <GooglePlacesAutocomplete
        disableScroll={false}
        placeholder={'Search location'}
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        keyboardAppearance={'light'}
        listViewDisplayed="auto"
        fetchDetails={true}
        renderDescription={(row) => row.description}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          const latLng = {
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
            latitudee: details.geometry.location.lat,
            longitudee: details.geometry.location.lng,
          };
          //setLat_Long(JSON.stringify(latLng));
          //const take_lat = JSON.stringify(latLng.latitudee);
          //const take_long = JSON.stringify(latLng.longitudee);
          //const take_data = JSON.stringify(latLng);
          setTake_Lat(latLng.latitudee);
          setTake_Long(latLng.longitudee);
          setLat_Long(latLng);
          fatchData(Take_Lat);

          //alert({Lat_Long});
          // console.log(details.geometry.location.lat);
          //alert(JSON.stringify(latLng));
          //alert(latLng.latitude + ' ' + latLng.longitude);
          ////////////////// Selected Item Data
          //setLat_Long(latLng);
          //alert(setLat_Long(JSON.stringify(latLng)));
        }}
        getDefaultValue={() => ''}
        query={{
          key: 'AIzaSyBTfjOzMaXGjvyuF59Z10CuEknpTWP7wII',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            //backgroundColor: 'pink',
            //height: 0,
            marginTop: 10,
            borderBottomWidth: 0,
            marginHorizontal: 0,
            //position: 'absolute',
          },
          textInput: {
            backgroundColor: 'white',
            borderRadius: 30,
            height: 50,
            fontSize: 16,
            borderWidth: 1,
          },
          description: {
            fontSize: 18,
            //paddingVerticle: 10,
            //height: 60,
          },
          // listView: {
          //   backgroundColor: 'blue',
          //   height: 300,
          // },
          container: {
            //backgroundColor: '#009069',
            //alignSelf: 'center',
            position: 'absolute',
            zIndex: 22,
            width: '80%',
            right: 30,
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
      />
      {/* {alert(Take_Lat + '  ' + Take_Long)} */}
      {/* {alert(Lat_Long.latitudee)} */}
      {console.log(Lat_Long.latitudee)}
      {console.log(JSON.stringify(Lat_Long.longitudee))}

      <MapView
        style={styles.map}
        region={{
          latitude: Take_Lat,
          longitude: Take_Long,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          coordinate={{latitude: Take_Lat, longitude: Take_Long}}
          pinColor="#009069"
          // image={require('./car.png')}
        />
      </MapView>

      <View style={{width: '98.7%', padding: 5, height: '40%', top: 470}}>
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
                <TouchableOpacity onPress={() => callLinkURL(item.Doc_list_id)}>
                  <Image
                    style={{height: 100, width: 200}}
                    source={{uri: item.Doc_Full_Url_Pic}}
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
                {item.Doc_first_name} {item.Doc_last_name}
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

export default MapScreen;
