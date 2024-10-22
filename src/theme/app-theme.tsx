import {StyleSheet} from 'react-native';

export const colors = {
  resultContainer: '#3f3f3f',
  btnActions: '#5C8374',
  btnNumber: '#1d1d1d',
  btnOperations: '#387478',
  btnEqual: '#243642',

  textPrimary: 'white',
  textSecondary: 'rgba(255, 255, 255, 0.6)',
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
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colors.resultContainer,
  },
  mainResult: {
    fontSize: 90,
    color: colors.textPrimary,
  },
  subResult: {
    fontSize: 60,
    color: colors.textSecondary,
  },
  boxBtns: {
    gap: 12,
    marginVertical: 30,
    marginHorizontal: 15,
  },
  rowBtns: {
    gap: 7,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    justifyContent: 'center',
    opacity: 1,
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.textPrimary,
  },
});
