import React from 'react';
import { Text, Image, ImageBackground, View, StyleSheet} from 'react-native';


const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground source={{uri: 'https://raw.githubusercontent.com/nakshatrasinghh/nakshatrasinghh/master/readme.jpg'}} 
        style={styles.image}>
          <View style={styles.InnerCard}>
            <Text style={styles.name}>Nakshatra Singh</Text>
            <Text style={styles.bio}>Deep Learning Enthusiast</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    // https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
  },
  image: {
    width: '100%', 
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  InnerCard: {
    padding: 10,
    // backgroundColor: 'gray'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24
  }

});

export default App;