import React from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './Tasks.styles';
import {ObjectItem} from '../redux/Types';

interface TasksProps {
  taskArray: Array<ObjectItem>;
  handleClick: Function;
  delTask: Function;
}

export const Tasks: React.FC<TasksProps> = ({
  taskArray,
  handleClick,
  delTask,
}): JSX.Element => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={taskArray}
      renderItem={({item}) => (
        <View style={styles.arrayText}>
          <View>
            <TouchableOpacity onPress={() => handleClick(item)}>
              <Text style={styles.array}>{item.task}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => delTask(item.id)}>
            <Image
              style={styles.closeButton}
              source={require('../img/close.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
