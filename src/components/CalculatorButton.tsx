import {Pressable, Text} from 'react-native';
import {styles, colors} from '../theme/app-theme';
import IoniIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName?: string;
  label?: string;
  bgColor?: string;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  iconName = '',
  bgColor = colors.darkGray,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: bgColor,
        opacity: pressed ? 0.8 : 1,
        borderRadius: pressed ? 35 : styles.button.borderRadius,
      })}
      onPress={onPress}>
      {iconName ? (
        <IoniIcon name={iconName} style={styles.buttonText} />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </Pressable>
  );
};
