import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import styleconfig from '../VGUtils/VGStyleConfig';
// import DGLoader from '../Component/DGCustom/DGReduxComponent/DGLoader';
import DgColors from '../VGUtils/VGColors';
import {Padding, Sizes} from '../VGUtils/VGDimensions';

class MainContainer extends React.PureComponent {
  render() {
    return (
      <View style={styles.vContainer}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={DgColors.black}
          translucent={false}
        />
        {/* <DGLoader /> */}
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
