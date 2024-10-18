import {StyleSheet} from 'react-native';

export const colors = {
  lightGray: '#747373',
  gray: '#3f3f3f',
  darkGray: '#2D2D2D',
  orange: '#e7892b',
  darkOrange: '#d6502f',

  textPrimary: 'white',
  textSecondary: '#777',
  background: '#141414',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    marginBottom: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colors.gray,
  },
  mainResult: {
    fontSize: 80,
    color: colors.textPrimary,
  },
  subResult: {
    fontSize: 50,
    color: colors.textSecondary,
  },
  rowBtns: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 7,
  },
  button: {
    width: 95,
    height: 95,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'whitesmoke',
  },
});
