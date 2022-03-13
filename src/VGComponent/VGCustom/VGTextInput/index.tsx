import React from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import FSColors from '../../../VGUtils/VGColors';
import {Sizes} from '../../../VGUtils/VGDimensions';
import VGColors from '../../../VGUtils/VGColors';

interface FSTextInputProps {
  placeholder?: string;
  inputProps?: any;
  onChangeText: any;
  value: any;
  index?: number;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}
const FSTextInput: React.FC<FSTextInputProps> = ({
  placeholder,
  inputProps,
  onChangeText,
  value,
  index,
  keyboardType,
  returnKeyType,
  maxLength,
  secureTextEntry,
  multiline,
  numberOfLines,
}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={VGColors.background_color}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        // multiline={multiLine}
        selectionColor={VGColors.blue}
      />
    </View>
  );
};

export default FSTextInput;
