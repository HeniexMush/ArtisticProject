import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListItem = () => {

    const Item = ({ title, id, image_id }) => {

      const imageId = image_id
      const artworkImageUrl = 'https://www.artic.edu/iiif/2/'+imageId+'/full/843,/0/default.jpg';
      //fix when id is null

        return (
          <View style={styles.listelement}>
            <View style={styles.column}>
              <Image source={{uri: artworkImageUrl}} style={styles.image}/>
            </View>

            <View style={styles.column}>
              <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.column}>
              <AntDesign 
                name="like2"
                size={20}
                color={'blue'}
                />
            </View>
          </View>
        )
      }
    
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} image_id={item.image_id}/>
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
    margin:8,
    borderRadius:10,
    
  },
  column: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius:10,
  },
  text: {
    fontSize: 11,
    color:'white',
    textAlign: 'center',
  },
});


export default ListItem