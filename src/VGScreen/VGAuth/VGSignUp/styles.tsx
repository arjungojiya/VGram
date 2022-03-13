import {StyleSheet} from 'react-native';
import VGColors from '../../../VGUtils/VGColors';
import {Margin} from '../../../VGUtils/VGDimensions';
import VGStyleConfig from '../../../VGUtils/VGStyleConfig';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: VGColors.black,
  },
  vLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: VGStyleConfig.smartScale(20),
  },
  iLogo: {
    height: VGStyleConfig.countPixelRatio(120),
    width: VGStyleConfig.countPixelRatio(400),
  },
  vTermsCondition: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VGStyleConfig.smartScale(20),
    marginHorizontal: Margin.defaultLarge,
  },
  vHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VGStyleConfig.smartScale(20),
  },
  tVGram: {
    color: VGColors.white,
    fontSize: VGStyleConfig.countPixelRatio(50),
    fontWeight: 'bold',
  },
  tValidation: {textAlign: 'left', marginLeft: 28, color: VGColors.red},
});

export default styles;
