import React from 'react';
import { Text, Image, ImageBackground, View, StyleSheet} from 'react-native';


const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
    <View style={styles.card}>
        <ImageBackground 
        source={{uri: image}}
        style={styles.image}> 
                <View style={styles.InnerCard}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.bio}>{bio}</Text>  
                </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
      width: '95%',
      height: '70%',
      borderRadius: 20,
      // vv https://ethercreative.github.io/react-native-shadow-generator/ vv
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    },
    // ^^ https://ethercreative.github.io/react-native-shadow-generator/ ^^
    image: {
      width: '100%', 
      height: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end', //flex-start, center, space-between, space-around, space-evenly
    },
    InnerCard: {
      padding: 20,
    //   backgroundColor: 'pink'
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

export default Card;
