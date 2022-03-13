import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/VGRedux/VGStore';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './src/VGRouter';
import MainContainer from './src/VGContainers';
import VGColors from './src/VGUtils/VGColors';

const App = (props: any) => {
  return (
    <Provider store={store}>
      <View style={styles.vContainer}>
        <View style={styles.vContainer}>
          <AppNavigator {...props} />
        </View>
        <MainContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: VGColors.white,
  },
});
export default App;
