import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './screens/CalculatorScreen';
import {colors, styles} from './theme/app-theme';

export const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
      />
      <CalculatorScreen />
    </View>
  );
};
