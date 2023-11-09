
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, } from 'react-native';
import { Feather } from '@expo/vector-icons'



export default function App() {

  const [apiData, setApiData] = useState();



  const fetchData = () => {
    fetch('https://api.artic.edu/api/v1/artworks/145166')
    .then(response=>response.json())
    .then(data => {
      setApiData([data]);
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }


  useEffect(() => {
    fetchData();
  }, []);

  const Item = ({title,dimensions,date_start,date_end}) => {
    return (
      <View>
        <Feather name={'sun'} size= {50} color={'black'}/>
        <Text>{title}</Text>
        <Text>{dimensions}</Text>
        <Text>{date_start}-{date_end}</Text>
      </View>
    )
  }
  
  
  const renderItem = ({item}) => (
    <Item title={item.data.title} dimensions={item.data.dimensions} date_start={item.data.date_start} date_end={item.data.date_end}/>
  )

  
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <FlatList 
      data={apiData}
      renderItem={renderItem}
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
    marginTop:50
  },
});
