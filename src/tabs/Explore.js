import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from '../elements/ListItem';
import FetchApiData from '../elements/FetchApiData';
import Detailgenerate from '../elements/Detailgenerate';
import FetchDetailData from '../elements/FetchDetailData';
const Explore = () => {
  const [itemId, setItemId] = useState(null);
  const getIdOnClick = () => {
    console.log(itemId)

  }
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndListReached, setIsEndListReached] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const fetchData = FetchApiData(setApiData, setCurrentPage, setIsLoading, setIsEndListReached);
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, getIdOnClick);
  const  Detail = Detailgenerate(modalVisible, setModalVisible, itemId);

  
  
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
