import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Detailgenerate = (modalVisible, setModalVisible) => {


  const Detail = () => {
    return (
    <View style={styles.modal}>
      <Modal
      transparent={true}
      visible={modalVisible}
      animationType='slide'
      onRequestClose={()=> {
        setModalVisible(!modalVisible);
      }}
      >
        <View style={styles.modaldata}>
        <Text>Test!</Text>
        <Button title='Back' onPress={()=> setModalVisible(!modalVisible)}/>
        </View>
      </Modal>
    </View>
    )
  }
  return Detail
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modaldata: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
})

export default Detailgenerate