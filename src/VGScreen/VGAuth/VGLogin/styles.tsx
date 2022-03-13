import {StyleSheet} from 'react-native';
import VGColors from '../../../VGUtils/VGColors';
import {Icon} from '../../../VGUtils/VGDimensions';
import VGStyleConfig from '../../../VGUtils/VGStyleConfig';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: VGColors.white,
  },
  vLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: VGStyleConfig.smartScale(20),
  },
  iLogo: {
    tintColor: VGColors.black,
    height: VGStyleConfig.countPixelRatio(80),
    // width: VGStyleConfig.countPixelRatio(400),
  },
  vForgotPasswordContainer: {
    alignItems: 'flex-end',
    marginEnd: VGStyleConfig.smartWidthScale(20),
  },
  vOrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: VGStyleConfig.smartScale(30),
  },
  tOr: {
    marginLeft: VGStyleConfig.smartWidthScale(40),
    marginRight: VGStyleConfig.smartWidthScale(40),
  },
  vLoginWithFaceBookContainer: {
    marginTop: VGStyleConfig.smartScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iFacebook: {
    width: Icon.defaultWidth,
    height: Icon.defaultHeight,
  },
  tcFacebook: {
    alignItems: 'center',
    marginStart: VGStyleConfig.smartWidthScale(10),
  },
  vSpaceContainer: {
    flexDirection: 'row',
    marginTop: VGStyleConfig.smartScale(30),
  },
  vDontHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: VGStyleConfig.smartScale(20),
  },
  tVGram: {
    color: VGColors.white,
    fontSize: VGStyleConfig.countPixelRatio(50),
    fontWeight: 'bold',
  },
});

export default styles;
