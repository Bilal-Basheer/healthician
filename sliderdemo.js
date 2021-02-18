// import React from 'react';
// import {View, Image, ScrollView, Dimensions} from 'react-native';

// const {width} = Dimensions.get('window');
// const height = (width * 0.6) ;
// const sliderdemo = () => {
//   // const images = ['./Images/DoctorFYP_logo.jpg', './Images/user_logo.jpg'];
//   const images = [
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//     {image: require('./Images/user_logo.jpg')},
//   ];
//   return (
//     <View style={{ height, width}}>
//       <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator style={{ height, width}}>
//         {images.map((item, index) => (
//           <Image
//             key={index}
//             source={item.image}
//             style={{width, height, alignSelf: 'center', resizeMode: 'cover'}}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default sliderdemo;
import React from 'react';
import {View, StyleSheet, Dimensions, Image, TouchableOpacity, Text } from 'react-native';
import {Title, Caption, Paragraph} from 'react-native-paper';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const sliderdemo = () => {
  return(
    <View>
      <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Image
              source={require('./Images/user_logo.jpg')}
              style={{height: 50, width: 50, borderRadius: 10}}
            />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title style={styles.title}>Bilal Basheer</Title>
              <Caption style={styles.caption}>www.reactnative.com</Caption>
              <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                150
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                5K
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
           <View style={styles.row_expr_like}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                150
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                5K
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                5K
              </Paragraph>
              <Caption style={styles.caption}>Hearts</Caption>
            </View>
          </View>
          </View>
            
          </View>
          <View style={styles.row}>
              <TouchableOpacity style={[styles.touch_able_opecity_style]}>
               <Text style={styles.login_text_style}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch_able_opecity_style}>
               <Text style={styles.login_text_style}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch_able_opecity_style_with_color}>
               <Text style={styles.login_text_style}>Book</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>

  );
};
export default sliderdemo;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 3 * vh,
    width: '95%',
    borderWidth:0.1,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.67,
    elevation: 4,
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
});