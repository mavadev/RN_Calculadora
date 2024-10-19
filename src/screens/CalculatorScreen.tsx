import {Text, View} from 'react-native';
import {colors, styles} from '../theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {number, buildNumber, clear, deleteOperation, toggleSign} =
    useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
          {number}
        </Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.rowBtns}>
        <CalculatorButton
          iconName="refresh-outline"
          bgColor={colors.lightGray}
          onPress={clear}
        />
        <CalculatorButton
          label="+/-"
          bgColor={colors.lightGray}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="%"
          bgColor={colors.lightGray}
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="÷"
          bgColor={colors.orange}
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton label="7" onPress={() => buildNumber('7')} />
        <CalculatorButton label="8" onPress={() => buildNumber('8')} />
        <CalculatorButton label="9" onPress={() => buildNumber('9')} />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="close-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton label="4" onPress={() => buildNumber('4')} />
        <CalculatorButton label="5" onPress={() => buildNumber('5')} />
        <CalculatorButton label="6" onPress={() => buildNumber('6')} />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="remove-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton label="1" onPress={() => buildNumber('1')} />
        <CalculatorButton label="2" onPress={() => buildNumber('2')} />
        <CalculatorButton label="3" onPress={() => buildNumber('3')} />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="add-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton label="0" onPress={() => buildNumber('0')} />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />
        <CalculatorButton
          iconName="return-down-back-outline"
          onPress={deleteOperation}
        />
        <CalculatorButton
          label="="
          bgColor={colors.darkOrange}
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
    </View>
  );
};
