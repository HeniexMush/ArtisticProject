import AsyncStorage from '@react-native-async-storage/async-storage';

//check if id is liked in async storage
const LoadLikes = async (id, setIsLiked) => {
  try {
    const likedArt = await AsyncStorage.getItem('likedArt');
    const parsedLikedArt = likedArt ? JSON.parse(likedArt) : {};

    if (parsedLikedArt[id]) {
      setIsLiked(true);
    }
  } catch (error) {
    console.error('Error loading liked state:', error);
  }
};
      
export default LoadLikes;