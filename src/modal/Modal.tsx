import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Modal as BaseModal,
} from 'react-native';
import {styles} from './Modal.styles';

interface Props {
    open: boolean,
    modalText: string,
    setModalText: Function,
    saveTextModal: Function
}

export const Modal: React.FC<Props> = ({open, modalText, setModalText, saveTextModal}): JSX.Element => {
  return (
    <BaseModal animationType="slide" transparent={true} visible={open}>
      <View style={styles.modal}>
        <TextInput
          style={{borderRadius: 1, borderWidth: 1}}
          value={modalText}
          onChangeText={() => setModalText}
        />
        <TouchableOpacity onPress={() => saveTextModal()}>
          <Text>close</Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
};
