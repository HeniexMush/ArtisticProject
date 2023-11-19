import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../elements/ListItem';
import { FontAwesome } from '@expo/vector-icons'; 
import Detailgenerate from '../elements/Detailgenerate';
import ZoomableImage from '../elements/ZoomableImage';
import ArtistModal from '../elements/AuthorPage';
import FetchSearch from '../elements/FetchSearch';

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [artisData, setArtistData] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
  const [isButtonDisabled,setIsButtonDisabled] = useState(false);
  const [placeholderTxt, setPlaceholderTxt] = useState("Click the search icon to display results!");
  const renderItem = ListItem(modalVisible, setModalVisible, setItemId, setDetailTitle,setDetailDate,setDetailImage,setDetailDimensions,setDetailArtist,setDetailDesc,setArtistId);
  const Detail = Detailgenerate(modalVisible, setModalVisible, itemId, detailTitle,detailDate,detailImage,detailDimensions,detailArtist,detailDesc,setImageVisible, setArtistData, setArtistVisible);
  

  const imageUrls = [
    {
      url: 'https://www.artic.edu/iiif/2/' + detailImage + '/full/843,/0/default.jpg',
    },
  ];
  //empty the data list and fetch data with new query
  const handleSearch = () => {
    setSearchData([]);
    setCurrentPage(1);
    console.log(searchText);
    FetchSearch(searchText, setSearchData,currentPage, setCurrentPage,setIsEndListReached, setIsLoading);
    setPlaceholderTxt("No results for this query!");
    
  }
  //add new data to list when end of the list is reached
  const addToList = () => {
    
    if (!isEndListReached && !isLoading) {
    setIsEndListReached(true);
    FetchSearch(searchText, setSearchData,currentPage, setCurrentPage,setIsEndListReached ,setIsLoading);
    
    }
  }
  //disable button to prevent multiple Api requests, temporary fix
  const disableButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 7000);
 }
  //generate list or placeholder text
  const  generateList = () => {
      if (searchData.length > 0) {
        return (
          <FlatList 
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={addToList}
          onEndReachedThreshold={0.2}
          />
        )
      } else {
        return (
          <View style={styles.emptyList}>
            <Text style={styles.emptyListText}>{placeholderTxt}</Text>
          </View>
        )
          
      }
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Type here to search..."
            placeholderTextColor='white'
          />
          <TouchableOpacity onPress={() =>{handleSearch();disableButton()}} disabled={isButtonDisabled}>
            <FontAwesome name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      
      {generateList()}
      
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
  container: {
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#353535',
    padding:10,
    
  },
  searchBar : {
    flexDirection: 'row',
    backgroundColor: '#353535',
    padding: 5,
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    backgroundColor: '#353535',

  },
  emptyListText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  emptyList: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 700,
    backgroundColor: '#353535',
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 0,
    marginBottom: 0,
    backgroundColor: '#353535',
  },

});
export default Search;