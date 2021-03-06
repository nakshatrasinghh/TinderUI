import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const App = () => {

  const [activeScreen, setActiveScreen] = useState('HOME');

  // change the theme later
  const color = '#b5b5b5'
 
  const activeColor = '#F76C6B'

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto name="tinder" size={32} color={activeScreen == 'HOME' ? activeColor : color} />
          </Pressable>
          <MaterialCommunityIcons name="star-four-points" size={32} color={color} />
          <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicons name="ios-chatbubbles" size={32} color={activeScreen == 'CHAT' ? activeColor : color} />
          </Pressable>
          <FontAwesome name="user" size={32} color={color} /> 
        </View>
        {activeScreen == 'HOME' && <HomeScreen />}
        {activeScreen == 'CHAT' && <MatchesScreen />}
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pageContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
});

export default App;