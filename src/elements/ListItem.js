import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Modal, TouchableHighlight, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LoadLikes from './LoadLikes';
import LikeArt from './LikeArt';



const ListItem = (modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist,setDetailDesc, setArtistId) => {
    
 
    const Item = ({ title, id, image_id, dimensions,artist_title,date_start,date_end,description, artist_id}) => {
      
      //check if list item is liked on mount, this is probably not the best solution, the likes keep flashing.
      useEffect(() => {
        LoadLikes(id, setIsLiked);
      }, []);
      
      const imageId = image_id
      const artworkImageUrl = 'https://www.artic.edu/iiif/2/'+imageId+'/full/843,/0/default.jpg';
      
      //format date
      const getDateRange = () => {
        
        if (date_start == null && date_end == null) {
          return 'unknown';
        } else if (date_start != null && date_end == null) {
          return `${date_start} to unknown`;
        } else if (date_start == null && date_end != null) {
          return `unknown to ${date_end}`;
        } else {
          return `${date_start} to ${date_end}`;
        }
      }
      
      const [isLiked, setIsLiked] = useState(false);

      //return the list item, set data for detail on click
      if (imageId !=null) {
        return (
          <TouchableHighlight onPress={()=> {setModalVisible(!modalVisible)}}  onPressIn={()=> {{setItemId(id);setDetailTitle(title);setDetailDate(getDateRange());setDetailImage(image_id);setDetailDimensions(dimensions);setDetailArtist(artist_title); setArtistId(artist_id); setDetailDesc(description)}}} underlayColor='lightgray'>
            <View>
              <View style={styles.listelement}>
              

              
                <Text style={styles.text}>{title}</Text>
              
                <TouchableHighlight onPress={() => LikeArt(id,setIsLiked)}>
                  <AntDesign 
                    name={isLiked ? 'like1' : 'like2'}
                    size={20}
                    color={isLiked ? 'blue': 'white'}
                    style={styles.icon}
                    />
                </TouchableHighlight>
              </View>
              <View>
                <Image source={{uri: artworkImageUrl}} style={styles.image}/>
              </View>
            </View>
        </TouchableHighlight>
        )
      } else {
        return (
          <TouchableHighlight onPress={()=> {setModalVisible(!modalVisible)}}  onPressIn={()=> {{setItemId(id);setDetailTitle(title);setDetailDate(getDateRange());setDetailImage(null);setDetailDimensions(dimensions);setDetailArtist(artist_title)}}} underlayColor='lightgray'>
            <View>
              <View style={styles.listelement}>
              

              
                <Text style={styles.text}>{title}</Text>
              
              
                <TouchableHighlight onPress={() => LikeArt(id,setIsLiked)}>
                  <AntDesign 
                    name={isLiked ? 'like1' : 'like2'}
                    size={20}
                    color={isLiked ? 'blue': 'white'}
                    style={styles.icon}
                    />
                </TouchableHighlight>
               
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
        <Item title={item.title} id={item.id} image_id={item.image_id} dimensions={item.dimensions} artist_title={item.artist_title} date_start={item.date_start} date_end={item.date_end} description={item.description} artist_id={item.artist_id}/>
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
    marginTop:20,
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