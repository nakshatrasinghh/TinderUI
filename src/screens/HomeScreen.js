import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/TinderCard';
import users from '../../assets/data/users';
import AnimatedStack from '../components/AnimatedStack';

const HomeScreen = () => {

  onSwipeLeft = user => {
    console.warn("swipe left: ", user.name);
  };

  onSwipeRight = user => {
    console.warn("swipe right: ", user.name);
  };

  return (
    <View style={styles.pageContainer}> 
      <AnimatedStack data={users} renderItem={({ item }) => <Card user={item}/>}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    // backgroundColor: 'red'
  },
});

export default HomeScreen;