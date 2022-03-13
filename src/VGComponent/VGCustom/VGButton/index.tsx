import {Image, Pressable, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface VGButtonProps {
  text?: string;
  extraStyle?: any;
  color?: any;
  textStyle?: any;
  icon?: any;
  iconStyle?: any;
  handleClick?: (link?: any) => void;
}

const VGButton: React.FC<VGButtonProps> = ({
  text,
  extraStyle,
  color,
  textStyle,
  icon,
  iconStyle,
  handleClick,
}) => {
  return (
    <Pressable
      style={[styles.pButtonContainer, extraStyle && extraStyle]}
      onPress={handleClick}>
      <Image style={[styles.iIcon, iconStyle]} source={icon} />
      <Text style={[color, styles.tButton, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default VGButton;
