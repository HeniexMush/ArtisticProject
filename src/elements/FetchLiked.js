//fetch data with known id
const FetchLiked = async (id,setIsLoading) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=title,id,image_id,date_start,date_end,dimensions,artist_title,artist_id,description`);
      const data = await response.json();
      return data.data;
  
    } catch (error) {
      console.error("Error while trying to access the API data:", error);

  
    }
    
  };
  
  export default FetchLiked;