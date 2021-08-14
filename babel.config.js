module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // https://docs.expo.dev/versions/latest/sdk/reanimated/
    plugins: ['react-native-reanimated/plugin'],
  };
};
