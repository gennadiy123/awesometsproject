import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Keyboard,
} from 'react-native';
import {styles} from './Input.styles';
import {ObjectItem} from '../redux/Types';
import {Modal} from '../modal/Modal';
import {Tasks} from '../tasks/Tasks';

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
    open,
    modalText,
    setModalText,
    saveTextModal,
    value,
  };

  const taskProps = {
    taskArray,
    handleClick,
    delTask,
  };

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
        <Modal {...modalProps} />
        <Tasks {...taskProps} />
      </View>
    </View>
  );
}
