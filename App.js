import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler, useDerivedValue, interpolate} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler'

const ROTATION = 60;


const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProfile = users[currentIndex];

  const { width: screenWidth } = useWindowDimensions();

  const hiddentranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(
    translateX.value,
    [ 0, hiddentranslateX ],
    [ 0, ROTATION ]
  )+ 'deg');

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
       translateX: translateX.value,
      },
      {
       rotate: rotate.value,
      },
  ],
    // opacity: sharedValue.value, 
  }));

  const Gesturehandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      // console.warn('onActive', event.translationX);
    },
    onEnd: (event) => {
      // console.warn('onEnd');
    }
  });

  return (
    <View style={styles.pageContainer}>
      <View style={styles.nextCardContainer}>
        <Card user={currentProfile} />
      </View>
      <PanGestureHandler onGestureEvent={Gesturehandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          {/* dynamic data rendering */}
          <Card user={currentProfile}/>
        </Animated.View>
      </PanGestureHandler>
    </View>
    
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    // backgroundColor: 'red'
  },
  animatedCard: {
    width: '100%',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    // backgroundColor: 'red'
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center', 
    alignItems: 'center',
    // position: 'absolute'
  }
});

export default App;