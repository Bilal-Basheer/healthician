import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
import {resetUserdata} from './utils';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const SideMenu = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#009069'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image
              source={require('./Images/user_logo.jpg')}
              size={50}
            />
            <View style={{marginLeft: 15, flexDirection: 'column'}}>
              <Title style={styles.title}>Bilal Basheer</Title>
              <Caption style={styles.caption} color={'white'}>
                www.reactnative.com
              </Caption>
            </View>
          </View>
          {/* <View style={styles.row}>
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
          </View> */}
        </View>
        {/* Drawer Section */}
        <Drawer.Section>
          <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="Login"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="Box Slider"
            onPress={() => {
              props.navigation.navigate('BoxSlider');
            }}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="Create Account"
            onPress={() => {
              props.navigation.navigate('Signup');
            }}
          />
          {/* <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="Search Doctor"
            onPress={() => {
              props.navigation.navigate('DoctorsSearch');
            }}
          /> */}
          {/* <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="Search Demo"
            onPress={() => {
              props.navigation.navigate('Demopicker');
            }}
          /> */}
          {/* <DrawerItem
            icon={() => (
              <Icon
                name="account-outline"
                style={{fontSize: 2.8 * vh, color: 'white'}}
              />
            )}
            label="API Demo"
            onPress={() => {
              props.navigation.navigate('ApiScreen');
            }}
          /> */}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon
              name="exit-to-app"
              style={{fontSize: 2.8 * vh, color: 'white'}}
            />
          )}
          label="Sign Out"
          onPress={() => {
            resetUserdata();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 3 * vh,
  },
  title: {
    fontSize: 2 * vh,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
  row: {
    marginTop: 2 * vh,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 1 * vh,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 1.5 * vh,
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
