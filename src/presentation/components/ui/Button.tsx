import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles, colors} from '../../../config/theme/app-theme';

interface Props {
  text: string;
  color?: string;
  size?: 'default' | 'double';
  onPress?: () => void;
}

const Button = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: props.color ? props.color : colors.darkGray,
        opacity: pressed ? 0.8 : 1,
        width: props.size === 'double' ? 150 : 70,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color:
            props.color === colors.lightGray
              ? colors.background
              : colors.textPrimary,
        }}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default Button;
