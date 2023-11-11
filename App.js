
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (currentPage) => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&fields=title,dimensions,date_start,date_end,id`)
      .then((response) => response.json())
      .then((data) => {
        setApiData((prevData) => [...prevData, ...data.data]);
        setCurrentPage(currentPage + 1);
        console.log(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  const Item = ({ title, dimensions, date_start, date_end, id }) => {

    return (
      <View>
        <Feather name={'sun'} size={50} color={'black'} />
        <Text>{title}</Text>
        <Text>{dimensions}</Text>
        <Text>{date_start}-{date_end}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} dimensions={item.dimensions} date_start={item.date_start} date_end={item.date_end} id={item.id} />
  )

  const addToList = () => {
    fetchData(currentPage);
  }

  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <FlatList 
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={addToList}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});


