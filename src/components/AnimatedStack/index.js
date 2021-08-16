import React, {useState, useEffect} from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
// import Card from './src/components/TinderCard';
// import users from './assets/data/users';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler, useDerivedValue, interpolate, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 600;


const AnimatedStack = (props) => {

  const { data, renderItem, onSwipeLeft, onSwipeRight  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = data[currentIndex];

  const nextProfile = data[nextIndex];

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

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(
        translateX.value,
        [ -hiddentranslateX, 0, hiddentranslateX ],
        [ 1, 0.8, 1 ]
      )}
  ],
  opacity: interpolate(
    translateX.value,
    [ -hiddentranslateX, 0, hiddentranslateX ],
    [ 1, 0.9, 1 ]
  ), 
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [ 0, hiddentranslateX / 5 ],
      [ 0, 1 ]
    ),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [ 0, -hiddentranslateX / 5 ],
      [ 0, 1 ]
    ),
  }));

  //useAnimatedGestureHandler -> UI thread
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
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY)  {
        translateX.value = withSpring(0);
        return;
      }
      //swipe > 800 -> throw card
      //Math.sign can also be used
      // if (event.velocityX < 0) {
      //   translateX.value = withSpring(-hiddentranslateX);
      // }
      // else {
      //    translateX.value = withSpring(hiddentranslateX);
      // }

      translateX.value = withSpring(hiddentranslateX * Math.sign(event.velocityX),
      {},
      //index cannot be changed on the UI thread, so it is shifted to the JS thread
      () => runOnJS(setCurrentIndex)(currentIndex + 1));

      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      //a javascript function is called on the JS thread
      onSwipe && runOnJS(onSwipe)(currentProfile);
    }, 
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex])

  return (
    <View style={styles.root}>
      {/* handling null error at end of card */}
      {nextProfile && (
      <View style={styles.nextCardContainer}>
      <Animated.View style={[styles.animatedCard, nextCardStyle]}>
          {renderItem({item: nextProfile})} 
      </Animated.View>
      </View>
      )} 
      
      {currentProfile && (
      <PanGestureHandler onGestureEvent={Gesturehandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          {/* dynamic data rendering */}
          <Animated.Image source={Like} style={[styles.like, {left: 10}, likeStyle]} resizeMode="contain"/>
          <Animated.Image source={Nope} style={[styles.like, {right: 10}, nopeStyle]} resizeMode="contain"/>
          {renderItem({item: currentProfile})}
        </Animated.View>
      </PanGestureHandler>
      )} 
    </View>
      
    
  );
};

const styles = StyleSheet.create({
  root:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    width: '100%',
    // backgroundColor: 'red'
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    // flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    // backgroundColor: 'red'
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center', 
    alignItems: 'center',
    // position: 'absolute'
  },
  like: {
    width:150,
    height:150,
    position: 'absolute',
    top: 10,
    zIndex:1,
    //https://github.com/facebook/react-native/issues/8968
    // elevation: 3, //for android 
  }
});

export default AnimatedStack;