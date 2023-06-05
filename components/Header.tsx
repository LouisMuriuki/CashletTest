import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DarkBlueGreycolor, GreenColor} from '../constants';
let today = new Date();
let hours = today.getHours();

const Header = () => {
  const [greeting, setGreeting] = useState<string>('');
  useEffect(() => {
    hours < 12
      ? setGreeting('Good Morning')
      : hours <= 18 && hours >= 12
      ? setGreeting('Good Afternoon')
      : setGreeting('Good Evening');
  }, []);
  return (
    <View style={styles.Headercontainer}>
      <View style={styles.innerContainer}>
        <Text
          style={{
            fontSize: 22,
            color: '#f5f5f5',
            marginBottom: 5,
            fontFamily: 'Montserrat-Regular',
          }}>
          {greeting} Jo
        </Text>
        <Text style={{color: '#f5f5f5', marginBottom: 10,fontFamily: 'Montserrat-Light'}}>
          Here's the latest
        </Text>
        <Text style={{color: GreenColor, fontSize: 22}}>KES 42,000</Text>
        <Text style={{color: '#f5f5f5',fontFamily: 'Montserrat-Light'}}>Total funds</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Headercontainer: {
    marginTop: 25,
    backgroundColor: DarkBlueGreycolor,
  },
  innerContainer: {
    margin: 20,
  },
});
