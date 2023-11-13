import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const Detailgenerate = (modalVisible, setModalVisible, itemId, detailTitle, detailDate,detailImage,detailDimensions,detailArtist) => {
  


  const artworkImageUrl = 'https://www.artic.edu/iiif/2/'+detailImage+'/full/843,/0/default.jpg';


  const Detail = () => {
    if (!modalVisible) {
      return null;
    }
    if (detailImage !=null) {
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
          <Image source={{
            uri: artworkImageUrl  
          }} style={styles.image}/>
          <Text>{detailTitle}</Text>
          <Text>{detailArtist}</Text>
          <Text>{detailDate}</Text>
          <Text>{detailDimensions}</Text>
          <Button title='Back' onPress={()=> setModalVisible(!modalVisible)}/>
          </View>
        </Modal>
      </View>
      )
    } else {
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
            <Image source={require('../../assets/missing.jpg')} style={styles.image}/>
            <Text>{detailTitle}</Text>
            <Text>{detailArtist}</Text>
            <Text>{detailDate}</Text>
            <Text>{detailDimensions}</Text>
            <Button title='Back' onPress={()=> setModalVisible(!modalVisible)}/>
            </View>
          </Modal>
        </View>
        )
    }
}
  return Detail
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
    modaldata: {
        margin: 20,
        marginTop:40,
        marginBottom:40,
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
    image: {
        width: 300,
        height: 500,
        resizeMode: 'cover',
        borderRadius:10,
    },
})

export default Detailgenerate