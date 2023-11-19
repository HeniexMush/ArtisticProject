import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList,TouchableHighlight, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../elements/ListItem';
import Detailgenerate from '../elements/Detailgenerate';
import ZoomableImage from '../elements/ZoomableImage';
import ArtistModal from '../elements/AuthorPage';
import FetchLiked from '../elements/FetchLiked';
const Liked = () => {
  const [artisData, setArtistData] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [likedArtIds, setLikedArtIds] = useState([]);
  const [likedArtworks, setLikedArtworks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailTitle, setDetailTitle] = useState([]);
  const [detailDate, setDetailDate] = useState([]);
  const [detailImage, setDetailImage] = useState([]);
  const [detailDimensions, setDetailDimensions] = useState([]);
  const [detailArtist, setDetailArtist] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [detailDesc, setDetailDesc] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);
  const [artistVisible, setArtistVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [isButtonDisabled,setIsButtonDisabled] = useState(false);
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist,setDetailDesc,setArtistId);
  const Detail = Detailgenerate(modalVisible, setModalVisible, itemId, detailTitle,detailDate,detailImage,detailDimensions,detailArtist,detailDesc,setImageVisible, setArtistData, setArtistVisible);


     const disableButton = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 7000);
     }
     
     
    const renderList =  () => {
      if (isLoading) {
        return (
          <ActivityIndicator/>
        )
      } else {
        return (
        <FlatList 
          data={likedArtworks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}     
          />
        )
      }

    }
  
   const fetchLikedArtIds = async () => {
    
    try {
      
      const likedArt = await AsyncStorage.getItem('likedArt');
      if (likedArt !== null) {
        setLikedArtIds(JSON.parse(likedArt));
      }
    } catch (error) {
      console.error('Error fetching liked art IDs:', error);
    }
    
  };

  
  const fetchLikedArtData = async () => {
    const likedArtList = [];
    const ids = Object.keys(likedArtIds);
    for (const id of ids) {
      try {
        const artworkData = await FetchLiked(id,setIsLoading);
        if (artworkData) {
          likedArtList.push(artworkData);
        }
      } catch (error) {
        console.error('Error fetching artwork data:', error);
      } 
    
    setLikedArtworks(likedArtList);
    setIsLoading(false);
      
    }
   };

  useEffect(() => {
    fetchLikedArtIds();
  }, []);

  useEffect(() => {
    if (Object.keys(likedArtIds).length > 0) {
      fetchLikedArtData(); 
    }
  }, [likedArtIds]);

  
  
  const imageUrls = [
    {
      url: 'https://www.artic.edu/iiif/2/' + detailImage + '/full/843,/0/default.jpg',
    },
  ];
  return (
    <View style={styles.background}>
      {renderList()}
      <Detail artistId={artistId}  />
      <ZoomableImage visible={imageVisible} title={detailTitle} imageUrls={imageUrls} onClose={() => {setImageVisible(false)}} />
      <ArtistModal artistData={artisData} artistVisible={artistVisible} setArtistVisible={setArtistVisible}/>
      <TouchableHighlight onPress={() => {fetchLikedArtIds(); fetchLikedArtData(); disableButton()}} style={styles.reloadLikesButton} disabled={isButtonDisabled}>
        <Text style={styles.reloadLikesText}>Reload Likes</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#353535',
    position: 'relative',
    paddingBottom: 0,
    marginBottom: 0,
  },
  reloadLikesButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    width: '100%',
    opacity: 0.6,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
    borderTopleftRadius: 5,
    borderToprightRadius: 5,
    borderBottomWidth:0,
  },
  reloadLikesText: {
    padding: 10,
    color: 'black',
    fontSize: 19,
    fontStyle: 'italic',
  },

});
export default Liked;

