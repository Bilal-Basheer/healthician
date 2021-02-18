import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import Sresult from './Sresult';
const domearry = [
  {id: 1, name: 'bilal', address: 'Rahim yar khan'},
  {id: 2, name: 'aamir', address: 'lahore'},
  {id: 3, name: 'zahir', address: 'islamabad'},
  {id: 4, name: 'saif', address: 'kohaat'},
  {id: 5, name: 'imran', address: 'kohaat'},
  {id: 6, name: 'faisal', address: 'dubai'},
  {id: 7, name: 'nomi', address: 'karachi'},
  {id: 8, name: 'raheel', address: 'faisal abad'},
  {id: 9, name: 'sharjeel', address: 'hydarabad'},
  {id: 10, name: 'adil', address: 'nore e wali'},
];
const demopicker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchQueryOrigin, setSearchQueryOrigin] = useState([]);
  useEffect(() => {
    setSearchQueryOrigin(domearry);
    setData(domearry);
  }, []);

  const onChangeSearch = (text) => {
    setSearchQuery(text);
    const newData = searchQueryOrigin.filter((item) => {
      const itemData = `${item.name.toUpperCase()}   
          ${item.address.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };
  return (
    <View style={{flex: 1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => onChangeSearch(text)}
        value={searchQuery}
        style={{width: '50%', left: 30,}}
      />
      <ScrollView>
        {data.map((item, index) => {
          return (
            <View>
              <Text style={{padding: 5, paddingHorizontal: 20}}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      {/* <Sresult/> */}
    </View>
  );
};

export default demopicker;
