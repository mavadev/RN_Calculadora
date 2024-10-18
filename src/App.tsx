import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './screens/CalculatorScreen';

export const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
};
