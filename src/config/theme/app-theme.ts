import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: '#FFFFFF',
  textSecondary: '#666666',
  background: '#000000',
};

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  textTotal: {
    color: colors.textPrimary,
    fontSize: 60,
    textAlign: 'right',
    fontWeight: '400',
    marginRight: 10,
  },
  subTotal: {
    color: colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
    fontWeight: '200',
    marginBottom: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '300',
    color: colors.textPrimary,
  },
  buttonOrange: {
    backgroundColor: colors.orange,
  },
});
