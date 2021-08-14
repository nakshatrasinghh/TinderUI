import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler'


const App = () => {

  const translateX = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: translateX.value,
    }],
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
      console.warn('onEnd');
    }
  });

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={Gesturehandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          {/* dynamic data rendering */}
          <Card user={users[0]}/>
        </Animated.View>
      </PanGestureHandler>
    </View>
    
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  animatedCard: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default App;