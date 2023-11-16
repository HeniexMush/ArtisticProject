import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from '../elements/ListItem';
import FetchApiData from '../elements/FetchApiData';
import Detailgenerate from '../elements/Detailgenerate';
import ZoomableImage from '../elements/ZoomableImage';
import FetchArtist from '../elements/FetchArtist';
const Explore = () => {
  const [apiData, setApiData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [currentPage, setCurrentPage] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndListReached, setIsEndListReached] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [detailTitle, setDetailTitle] = useState([]);
  const [detailDate, setDetailDate] = useState([]);
  const [detailImage, setDetailImage] = useState([]);
  const [detailDimensions, setDetailDimensions] = useState([]);
  const [detailArtist, setDetailArtist] = useState([]);
  const [artistId, setArtistId] = useState([]);
  const [detailDesc, setDetailDesc] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);
  const fetchArtist = FetchArtist(setArtistData, artistId)
  const fetchData = FetchApiData(setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached);
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist,setDetailDesc, setArtistId);
  const Detail = Detailgenerate(modalVisible, setModalVisible, itemId, detailTitle,detailDate,detailImage,detailDimensions,detailArtist,detailDesc, imageVisible,setImageVisible);
  
  
  useEffect(() => {
    fetchData(setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached);
  }, []);
  const addToList = () => {
    if (!isEndListReached && !isLoading) {
    setIsEndListReached(true);
    fetchData(setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached);
    }
  }
  const imageUrls = [
    {
      url: 'https://www.artic.edu/iiif/2/' + detailImage + '/full/843,/0/default.jpg',
    },
  ];
  return (
    <View style={styles.background}>
      <FlatList 
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={addToList}
        onEndReachedThreshold={0.2}
        
      />
      <Detail />
      <ZoomableImage visible={imageVisible} title={detailTitle} imageUrls={imageUrls} onClose={() => {setImageVisible(false)}} />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#353535', 
  },
});
export default Explore;
