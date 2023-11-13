import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import FetchDetailData from './FetchDetailData';

const Detailgenerate = (modalVisible, setModalVisible, itemId) => {

/* title,date_display,image_id,dimensions,artist_title */
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
        <Text>{itemId}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button title='debug' onPress={()=> {console.log(itemId)}}/>
        <Button title='quit' onPress={()=> {setModalVisible(!modalVisible)}}/>
        </View>
      </Modal>
    </View>
    )
  }


  return Detail;
}



const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        marginTop: 40,
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