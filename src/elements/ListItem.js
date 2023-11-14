import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ListItem = (modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist) => {


 
    const Item = ({ title, id, image_id, dimensions,artist_title,date_display}) => {

      const imageId = image_id
      const artworkImageUrl = 'https://www.artic.edu/iiif/2/'+imageId+'/full/843,/0/default.jpg';
      
      

      if (imageId !=null) {
        return (
          <TouchableHighlight onPress={()=> {setModalVisible(!modalVisible)}}  onPressIn={()=> {{setItemId(id);setDetailTitle(title);setDetailDate(date_display);setDetailImage(image_id);setDetailDimensions(dimensions);setDetailArtist(artist_title)}}} underlayColor='lightgray'>
            <View>
              <View style={styles.listelement}>
              

              
                <Text style={styles.text}>{title}</Text>
              
              
                <AntDesign 
                  name="like2"
                  size={20}
                  color={'blue'}

                  style={styles.icon}
                  />
              
              </View>
              <View>
                <Image source={{uri: artworkImageUrl}} style={styles.image}/>
              </View>
            </View>
        </TouchableHighlight>
        )
      } else {
        return (
          <TouchableHighlight onPress={()=> {setModalVisible(!modalVisible)}}  onPressIn={()=> {{setItemId(id);setDetailTitle(title);setDetailDate(date_display);setDetailImage(null);setDetailDimensions(dimensions);setDetailArtist(artist_title)}}} underlayColor='lightgray'>
            <View>
              <View style={styles.listelement}>
              

              
                <Text style={styles.text}>{title}</Text>
              
              
                <AntDesign 
                  name="like2"
                  size={20}
                  color={'blue'}
                  style={styles.icon}
                  />
               
              </View>
              <View>
                <Image source={require('../../assets/missing.jpg')} style={styles.image}/>
              </View>
            </View>
          </TouchableHighlight>
        )
      }

      }
    
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} image_id={item.image_id} dimensions={item.dimensions} artist_title={item.artist_title} date_display={item.date_display}/>
    )
    
    return renderItem
}

const styles = StyleSheet.create({
  listelement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#696969',
    paddingHorizontal: 10,
    padding:8,
    marginTop:8,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
 
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  text: {

    fontSize: 11,
    color:'white',
    textAlign: 'left',
  },
  icon: {
    alignSelf: 'flex-end',
  }

});


export default ListItem