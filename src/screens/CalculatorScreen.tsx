import {Text, View} from 'react-native';
import {colors, styles} from '../theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.rowBtns}>
        <CalculatorButton
          iconName="refresh-outline"
          bgColor={colors.lightGray}
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="+/-"
          bgColor={colors.lightGray}
          onPress={() => console.log('Funciona el boton')}
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
        <CalculatorButton
          label="7"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="8"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="9"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="close-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton
          label="4"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="5"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="6"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="remove-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton
          label="1"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="2"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="3"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          bgColor={colors.orange}
          iconName="add-outline"
          onPress={() => console.log('Funciona el boton')}
        />
      </View>
      <View style={styles.rowBtns}>
        <CalculatorButton
          label="0"
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          label="."
          onPress={() => console.log('Funciona el boton')}
        />
        <CalculatorButton
          iconName="return-down-back-outline"
          onPress={() => console.log('Funciona el boton')}
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
