import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ApiScreen = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    fatchData =()=> {
      fetch('http://284159a041f2.ngrok.io/videoflix/testingApi', {
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
    
    }
    fatchData();
    console.log('this is data');
    console.log(data);
    console.log('this is data end');
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', fontSize: 24}}>
        this is API Screen
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, alignSelf: 'center'}}>
            {item.Doc_list_id}--{item.Doc_first_name}--{item.Doc_last_name}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={{alignSelf: 'center', fontSize: 24}}>
        {JSON.stringify(error)}
      </Text>
    </View>
  );
};

export default ApiScreen;
