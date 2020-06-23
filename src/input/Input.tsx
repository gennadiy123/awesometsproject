import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  Keyboard
} from 'react-native';
import {styles} from './Input.styles';
import {ObjectItem} from '../redux/Types';
import {Modal} from '../modal/Modal'


export function Input() {
  const [taskArray, setTaskArray] = useState<Array<ObjectItem>>([]);
  const [value, setValue] = useState<string>('');
  const [modalObject, setModalObject] = useState<ObjectItem | null>(null);
  const [modalText, setModalText] = useState<string>(
    modalObject ? modalObject.task : '',
  );
  const [open, setOpen] = useState<boolean>(false);

  console.log('modalObject', modalObject);
  console.log('modalText', modalText);

  const handleSubmit = (): void => {
    Keyboard.dismiss();
    !value
      ? Alert.alert('Type something')
      : setTaskArray([...taskArray, {task: value, id: Date.now()}]);
    setValue('');
  };

  const delTask = (id: number): void => {
    setTaskArray([...taskArray.filter((task) => task.id !== id)]);
  };

  const handleClick = (item: ObjectItem): void => {
    if (item) {
      setModalText(item.task);
      setModalObject(item);
      setOpen(true);
    }
  };

  const saveTextModal = (): void => {
    if (modalObject) {
      setTaskArray([
        ...taskArray.map((el) =>
          el.id === modalObject.id ? {...el, task: modalText} : el,
        ),
      ]);
      setModalObject(null);
      setOpen(false);

    }
  };

  const modalProps = {
    open, modalText, setModalText, saveTextModal, value
  }

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Type here!"
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity style={styles.touch} onPress={handleSubmit}>
        <Text style={styles.text}>Enter</Text>
      </TouchableOpacity>
      <View>
        <Modal {...modalProps}/>
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
      </View>
    </View>
  );
}
