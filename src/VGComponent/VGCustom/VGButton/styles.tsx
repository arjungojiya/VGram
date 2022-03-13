import {StyleSheet} from 'react-native';
import FSColors from '../../../VGUtils/VGColors';
import {Margin, Padding, Sizes} from '../../../VGUtils/VGDimensions';

const styles = StyleSheet.create({
  pButtonContainer: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
    paddingVertical: Padding.default,
    borderRadius: Sizes.cornerRadius.default,
    backgroundColor: FSColors.blue,
  },
  tButton: {
    fontSize: Sizes.text.subtitle,
    alignSelf: 'center',
  },
  iIcon: {
    marginRight: Padding.small,
  },
});

export default styles;
