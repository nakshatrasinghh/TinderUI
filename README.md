# TinderUI using expo-CLI

<p align="center">
<img title="UI/UX" src="assets/readme/tinder.gif" width="275" height="600"><img title="UI/UX with Like/Reject" src="assets/readme/Tinder2.gif" width="290" height="600">
</p>


This Tinder UI/UX is build using expo-cli rather than react-native-cli. The concept of interpolation was used for animations. On android devices, zIndex + position:'absolute' breaks with dynamic components. The issue can be found [here](https://github.com/facebook/react-native/issues/8968). Hence, Like/Nope containers do not render on an andriod device but on iOS. I do not own an iphone, hence, the card pop animation out isn't visible on iOS, but available on Android. 

