import AsyncStorage from '@react-native-async-storage/async-storage';

//set id in likedArt to true or remove it from storage
const LikeArt = async (id ,setIsLiked) => {
  try {
    let likedArt = await AsyncStorage.getItem('likedArt');
    let parsedLikedArt = likedArt ? JSON.parse(likedArt) : {};

    if (parsedLikedArt[id]) {
      delete parsedLikedArt[id]; 
      setIsLiked(false);
    } else {
      parsedLikedArt[id] = true;
      setIsLiked(true);
    }

    await AsyncStorage.setItem('likedArt', JSON.stringify(parsedLikedArt));
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};

export default LikeArt;