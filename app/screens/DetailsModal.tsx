import { View, Text, Modal, Button } from "react-native";
import React, { useState } from "react";

interface Props {
  modalVisible: boolean;
  setModalVisible: (x: boolean) => void;
}

const DetailsModal = ({ modalVisible, setModalVisible }: Props) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      presentationStyle="pageSheet"
    >
      <Text>DetailsModal</Text>
      <Button title="Close" onPress={() => setModalVisible(false)}></Button>
    </Modal>
  );
};

export default DetailsModal;
