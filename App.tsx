import React from 'react';
import {Input} from './src/input/Input';
import {View, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.background}>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
