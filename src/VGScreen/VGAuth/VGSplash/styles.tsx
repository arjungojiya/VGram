import {StyleSheet} from 'react-native';
import VGColors from '../../../VGUtils/VGColors';
import VGStyleConfig from '../../../VGUtils/VGStyleConfig';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: VGColors.white,
  },
  iSplashLogo: {
    height: VGStyleConfig.smartScale(120),
    width: VGStyleConfig.smartWidthScale(120),
    resizeMode: 'contain',
  },
});

export default styles;
