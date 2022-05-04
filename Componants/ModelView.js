import {View, TouchableWithoutFeedback, Text, Modal} from 'react-native';
import React from 'react';

const ModelView = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.ShowModal}
      onRequestClose={props.onCloseModal}>
      <TouchableWithoutFeedback
        activeOpacity={1}
        style={{backgroundColor: 'rgba(0000, 0, 0, 0)', flex: 1}}>
        {props.children}
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModelView;
