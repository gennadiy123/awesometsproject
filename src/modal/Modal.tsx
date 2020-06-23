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
  open: boolean;
  modalText: string;
  setModalText: Function;
  saveTextModal: Function;
  value: string;
}

export const Modal: React.FC<Props> = ({
  open,
  modalText,
  setModalText,
  saveTextModal,
  value,
}): JSX.Element => {
  return (
    <BaseModal animationType="slide" transparent={true} visible={open}>
      <View style={styles.modal}>
        <TextInput
          style={styles.textInput}
          value={modalText}
          onChangeText={(value) => setModalText(value)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={(value) => saveTextModal(value)}>
          <Text style={styles.buttonText}>close</Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
};
