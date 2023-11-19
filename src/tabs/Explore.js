import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from '../elements/ListItem';
import FetchApiData from '../elements/FetchApiData';
import Detailgenerate from '../elements/Detailgenerate';
import ZoomableImage from '../elements/ZoomableImage';
import ArtistModal from '../elements/AuthorPage';
const Explore = () => {
  //beautiful wall of variables
  const [apiData, setApiData] = useState([]);
  const [artisData, setArtistData] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
  const [artistVisible, setArtistVisible] = useState(false);
  const fetchData = FetchApiData(setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached);
  //pass functions to set data for the detail
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist,setDetailDesc,setArtistId);
  //pass all needed data to generate the detail, and change visibility of the detail
  const Detail = Detailgenerate(modalVisible, setModalVisible, itemId, detailTitle,detailDate,detailImage,detailDimensions,detailArtist,detailDesc,setImageVisible, setArtistData, setArtistVisible);
  //fetch initial data on run
  useEffect(() => {
    fetchData(setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached);
  }, []);
  //trigger fetching new data when the end list is reached
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
  //generate lists and details based on the data
  return (
    <View style={styles.background}>
      <FlatList 
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={addToList}
        onEndReachedThreshold={0.2}
        
      />
      <Detail artistId={artistId}  />
      <ZoomableImage visible={imageVisible} title={detailTitle} imageUrls={imageUrls} onClose={() => {setImageVisible(false)}} />
      <ArtistModal artistData={artisData} artistVisible={artistVisible} setArtistVisible={setArtistVisible}/>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#353535', 
  },
});
export default Explore;
