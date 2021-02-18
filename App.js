import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './Login';
import Signup from './Signup';
import DrawerScreen from './DrawerScreen';
import Dashboard from './Dashboard';
import BoxSlider from './sliderdemo';
import DoctorsSearch from './DoctorsSearch';
import Demopicker from './demopicker';
import SplashScreen from './SplashScreen';
import ApiScreen from './API';
import IntroScreen from './Intro';
import MapScreen from './MapScreen';
import API from './API';
import DoctorProfileScreen from './DoctorProfileScreen';
import CovidScreen from './CovidScreen';
import HealthyTipsScreen from './HealthyTipsScreen';

const Drawer = createDrawerNavigator();
function App() {
  // console.log("sdgg sdfgd  dgsd sgsdg sd ")
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerScreen {...props} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={SplashScreen} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="BoxSlider" component={BoxSlider} />
        <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
        <Drawer.Screen name="DoctorsSearch" component={DoctorsSearch} />
        <Drawer.Screen name="Demopicker" component={Demopicker} />
        <Drawer.Screen name="ApiScreen" component={ApiScreen} />
        <Drawer.Screen name="IntroScreen" component={IntroScreen} />
        <Drawer.Screen name="MapScreen" component={MapScreen} />
        <Drawer.Screen name="CovidScreen" component={CovidScreen} />
        <Drawer.Screen name="HealthyTipsScreen" component={HealthyTipsScreen} />
        <Drawer.Screen
          name="DoctorProfileScreen"
          component={DoctorProfileScreen}
        />
        <Drawer.Screen name="API" component={API} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
