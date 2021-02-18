import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Intro = (props) => {
  return (
    <Onboarding
      onSkip={() => props.navigation.navigate('Dashboard')}
      onDone={() => props.navigation.navigate('Dashboard')}
      pages={[
        {
          backgroundColor: '#009069',
          image: (
            <Image
              source={require('./Images/doctors_logo.png')}
              style={{height: 200, width: 200}}
            />
          ),
          title: 'Doctors Option',
          subtitle: 'you can find Doctros Directly',
          subTitleStyles: {fontSize: 20},
        },
        {
          backgroundColor: '#009069',
          image: (
            <Image
              source={require('./Images/location.png')}
              style={{height: 200, width: 200}}
            />
          ),
          title: 'Location Options',
          subtitle: 'You can Find Doctors by Location and Clanics',
          subTitleStyles: {fontSize: 20},
        },
        {
          backgroundColor: '#009069',
          image: (
            <Image
              source={require('./Images/healthy_tips.png')}
              style={{height: 200, width: 200}}
            />
          ),
          title: 'In Healthy ',
          subtitle: 'Here you can learn about healthy tips',
          subTitleStyles: {fontSize: 20},
        },
      ]}
    />
  );
};

export default Intro;
