import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
//source={require('../../assets/missing.jpg')}


const Detailgenerate = (modalVisible, setModalVisible, itemId, detailTitle, detailDate,detailImage,detailDimensions,detailArtist) => {
  
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
            uri:  'https://www.artic.edu/iiif/2/'+detailImage+'/full/843,/0/default.jpg' 
          }} style={styles.image}/>
          <Text style={styles.title}>{detailTitle}</Text>
          <View style={styles.row}>
            <Text style={styles.labelText}>Author</Text>
            <Text style={styles.detailText}>{detailArtist}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText} >Date</Text>
            <ScrollView style={styles.scrollContain} showsVerticalScrollIndicator={false}>
              <Text style={styles.scrollText}>{detailDate}</Text>
            </ScrollView>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText}>Dimensions</Text>
            <ScrollView style={styles.scrollContain} showsVerticalScrollIndicator={false}>
              <Text style={styles.scrollText}>{detailDimensions}</Text>
            </ScrollView>
          </View>
          <Button title='Back' onPress={()=> setModalVisible(!modalVisible)} style={styles.backButton}/>
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
            <Button title='Back' onPress={()=> setModalVisible(!modalVisible)} style={styles.backButton}/>
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
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
    image: {
        width: 200,
        height: 350,
        resizeMode: 'cover',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'black', 
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 2,


    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 10,
      
    },
    labelText: {
      fontWeight: 'bold',
      color: 'blue',
      borderColor: 'blue',
      borderWidth: 1, 
      borderRadius: 5, 
      padding: 10,
      flex:1,
      textAlign: 'left',
      marginRight:5,
      
    },
    detailText: {
      flex:2,
      color: 'black',
      borderWidth: 1,
      borderColor: 'black', 
      borderRadius: 5, 
      padding: 10,
      textAlign:'right',
      overflow: 'hidden',
    },
    title: {
      marginTop: 10,
      textAlign: 'center',
      fontSize:24,
      fontStyle: 'italic',
    },
    backButton: {
      width: '100%',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      paddingVertical: 12, 
    },
    scrollContain: {
      textAlign: 'right',
      flex: 2,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      paddingBottom: 10,
      maxHeight: 50,
    },
    scrollText: {
      flex: 1,
      paddingBottom: 10,
      width: '100%',
      textAlign: 'right',
    },

})

export default Detailgenerate