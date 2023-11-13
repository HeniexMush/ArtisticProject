import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from '../elements/ListItem';
import FetchApiData from '../elements/FetchApiData';
import Detailgenerate from '../elements/Detailgenerate';
const Explore = () => {
  const [apiData, setApiData] = useState([]);
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
  const fetchData = FetchApiData(setApiData, setCurrentPage, setIsLoading, setIsEndListReached);
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist);
  const Detail = Detailgenerate(modalVisible, setModalVisible, itemId, detailTitle,detailDate,detailImage,detailDimensions,detailArtist);
  
  useEffect(() => {
    fetchData(currentPage);
  }, []);
  const addToList = () => {
    if (!isEndListReached && !isLoading) {
    setIsEndListReached(true);
    fetchData(currentPage);
    }
  }
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
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#353535', 
  },
});
export default Explore;
