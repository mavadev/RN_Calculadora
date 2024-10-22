import {Pressable, Text} from 'react-native';
import {styles, colors} from '../theme/app-theme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  iconName?: string;
  label?: string;
  bgColor?: string;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  iconName = '',
  bgColor = colors.btnNumber,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: bgColor,
        opacity: pressed ? 0.8 : 1,
        borderRadius: pressed ? 30 : styles.button.borderRadius,
      })}
      onPress={onPress}>
      {iconName ? (
        <MaterialIcon name={iconName} style={styles.buttonText} />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </Pressable>
  );
};
