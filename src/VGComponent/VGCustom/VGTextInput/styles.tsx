import {StyleSheet} from 'react-native';
import FSColors from '../../../VGUtils/VGColors';
import {Margin, Sizes} from '../../../VGUtils/VGDimensions';

const styles = StyleSheet.create({
  tiContainer: {
    flex: 1,
    color: FSColors.black,
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
    fontSize: Sizes.text.subtitle,
    backgroundColor: FSColors.primary,
  },
});

export default styles;
