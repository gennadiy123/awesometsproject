import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  Keyboard,
  Modal,
} from 'react-native';
import {styles} from './Input.styles';
import {ObjectItem} from '../redux/Types';

export function Input() {
  const [array, setArray] = useState<Array<ObjectItem>>([]);
  const [value, setValue] = useState<string>('');
  const [modalObject, setModalObject] = useState<ObjectItem | null>(null);
  const [modalText, setModalText] = useState<string>(
    modalObject ? modalObject.task : '',
  );

  console.log('modalObject', modalObject);
  console.log('modalText', modalText);

  const handleSubmit = (): void => {
    Keyboard.dismiss();
    !value
      ? Alert.alert('Type something')
      : setArray([...array, {task: value, id: Date.now()}]);
    setValue('');
  };
  const delTask = (id: number): void => {
    setArray([...array.filter((task) => task.id !== id)]);
  };

  const handleClick = (item: ObjectItem): void => {
    if (item) {
      setModalText(item.task);
      setModalObject(item);
    }
  };

  const saveTextModal = (): void => {
    if (modalObject) {
      setArray([
        ...array.map((el) =>
          el.id === modalObject.id ? {...el, task: modalText} : el,
        ),
      ]);
      setModalObject(null);
    }
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
        <Modal animationType="slide" transparent={true} visible={!!modalObject}>
          <View style={styles.modal}>
            <TextInput
              style={{borderRadius: 1, borderWidth: 1}}
              value={modalText}
              onChangeText={setModalText}
            />

            <TouchableOpacity onPress={() => saveTextModal()}>
              <Text>close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={array}
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
