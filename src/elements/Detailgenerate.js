import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image,Dimensions, Modal, TouchableHighlight, ScrollView, useWindowDimensions,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import FetchArtist from './FetchArtist';



const Detailgenerate = (modalVisible, setModalVisible, itemId, detailTitle, detailDate,detailImage,detailDimensions,detailArtist,detailDesc,setImageVisible, setArtistData, setArtistVisible) => {
  
 
  const Detail = ({artistId}) => {
    
  
    const renderDescription = () => {
      if (detailDesc) {
        return (
          <ScrollView style={styles.scrollContainDesc} showsVerticalScrollIndicator={false}>
          <HTML source={{ html: detailDesc }} contentWidth={300} 
          tagsStyles={{ p: { textAlign: 'center' }}} />
          </ScrollView>
        );
      } else {
        return (

          <Text style={styles.notfound}>No description available</Text>
        );
      }
    };
    const fetchArtist = async () => {
      try {
        const artistData = await FetchArtist(artistId);
        setArtistData(artistData);
        setArtistVisible(true);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    const renderArtist = () => {
      if(detailArtist != null) {
        return (
          <TouchableOpacity onPressIn={() => fetchArtist()}>
            <Text style={styles.artistText}>{detailArtist}</Text>
          </TouchableOpacity>
        )
      } else {
        return (
          <Text style={styles.detailText}>Unknown</Text>
        )
      }
    }
  
    if (detailImage !=null) {
      return (
      <View style={styles.modal}>
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType='slide'
        onRequestClose={()=> {
          setModalVisible(false);
        }}
        >
          <View style={styles.modaldata}>
            
           
         
            <TouchableOpacity onPress={() =>{setImageVisible(true)}} style={styles.buttonView}>
              <Image
                source={{
                  uri: 'https://www.artic.edu/iiif/2/' + detailImage + '/full/843,/0/default.jpg',
                }}
                style={styles.image}
              />
            </TouchableOpacity>
            
           
        
          
          <Text style={styles.title}>{detailTitle}</Text>
          <View style={styles.row}>
            <Text style={styles.labelText}>Author</Text>
            {renderArtist()}
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText} >Date</Text>
            
            <Text style={styles.detailText}>{detailDate}</Text>
            
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText}>Dimensions</Text>
            <ScrollView style={styles.scrollContain} showsVerticalScrollIndicator={false}>
              <Text style={styles.scrollText}>{detailDimensions}</Text>
            </ScrollView>
          </View>
          {renderDescription()}
          <TouchableOpacity onPress={()=> setModalVisible(false) } style={styles.returnField}>
            <View style={styles.buttonView}>
              <Text style={styles.returnButton}>Return</Text>
            </View>
          </TouchableOpacity>
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
          setModalVisible(false);
        }}
        >
          <View style={styles.modaldata}>
            
           
         
            
              <Image
                source={require('../../assets/missing.jpg')}
                style={styles.image}
              />
            
            
           
        
          
          <Text style={styles.title}>{detailTitle}</Text>
          <View style={styles.row}>
            <Text style={styles.labelText}>Author</Text>
            {renderArtist()}
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText} >Date</Text>
            
            <Text style={styles.detailText}>{detailDate}</Text>
            
          </View>
          <View style={styles.row}>
            <Text style={styles.labelText}>Dimensions</Text>
            <ScrollView style={styles.scrollContain} showsVerticalScrollIndicator={false}>
              <Text style={styles.scrollText}>{detailDimensions}</Text>
            </ScrollView>
          </View>
          {renderDescription()}
          <TouchableOpacity onPress={()=> setModalVisible(false) } style={styles.returnField}>
            <View style={styles.buttonView}>
              <Text style={styles.returnButton}>Return</Text>
            </View>
          </TouchableOpacity>
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
        marginTop: 30,
      },
    modaldata: {
        margin: 20,
        marginTop:40,
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
          width:'100%',
          height:300,
          resizeMode: 'cover',
          borderRadius:10,
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
    scrollContain: {
      flex:2,
      textAlign: 'right',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      paddingBottom: 10,
      maxHeight: 50,
      minHeight:30,
    },
    scrollContainDesc: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      paddingBottom: 10,
      maxHeight: 60,
      minHeight:20,
    },
    scrollText: {
      flex:2,
      paddingBottom: 10,
      width: '100%',
      textAlign: 'right',
    },
    desc: {
      flex:2,
      paddingBottom: 5,
      width: '100%',
      textAlign: 'center',
    },
    notfound: {
      width: '100%',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
    },
    returnButton: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      color: 'black',
      backgroundColor:'white',
      fontSize: 19,
      position: 'absolute',
      flex:1,
      alignSelf:'center',
      width:'100%',
      textAlign:'center',
    },
    returnField: {
      flex:1,
      alignSelf:'center',
      marginBottom:5,
    },
    buttonView: {
      width:'100%',
    },
    artistText: {
      flex:1,
      color: 'black',
      borderWidth: 1,
      borderColor: 'black', 
      borderRadius: 5, 
      padding: 10,
      textAlign:'right',
      overflow: 'hidden',
      textDecorationLine:'underline',
      
    },
 
})

export default Detailgenerate