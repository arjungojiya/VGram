import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import styleconfig from '../VGUtils/VGStyleConfig';
// import VGLoader from '../Component/VGCustom/VGReduxComponent/VGLoader';
import VGColors from '../VGUtils/VGColors';
import {Padding, Sizes} from '../VGUtils/VGDimensions';

class MainContainer extends React.PureComponent {
  render() {
    return (
      <View style={styles.vContainer}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={VGColors.black}
          translucent={false}
        />
        {/* <VGLoader /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    position: 'absolute',
    right: Padding.none,
    left: Padding.none,
    width: styleconfig.width,
    zIndex: Sizes.zIndex,
  },
});

export default MainContainer;
