import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/TinderCard';
import users from '../../assets/data/users';
import AnimatedStack from '../components/AnimatedStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


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
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={30} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={30} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={30} color="#4FCC94" />
        </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={30} color="#A65CD2" />
        </View>   
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: '#ededed'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', 
    paddingBottom: 10,
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,


  },
});

export default HomeScreen;