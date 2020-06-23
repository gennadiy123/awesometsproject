import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 400,
    fontSize: 20,
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 18,
    backgroundColor: 'aqua',
    width: 160,
    borderRadius: 20,
    height: 70,
  },
  text: {
    fontSize: 26,
  },
  array: {
    color: 'aqua',
    marginLeft: 8,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'left',
    width: 400,
  },
  arrayText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  closeButton: {
    width: 24,
    height: 24,
    marginTop: 6,
  }
});
