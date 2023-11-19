//fetch data with known query and page
const FetchLiked = async (query,setSearchData,currentPage, setCurrentPage,setIsEndListReached,setIsLoading) => {
    
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${currentPage}&limit=10&fields=title,id,image_id,date_start,date_end,dimensions,artist_title,artist_id,description`);
      const data = await response.json();
      console.log(data.data);
      setSearchData((prevData) => [...prevData, ...data.data]);
      setCurrentPage(currentPage + 1 );
      setIsEndListReached(false);
  
    } catch (error) {
      console.error("Error while trying to access the API data:", error);

  
    }
    setIsLoading(false);
  };
  
  export default FetchLiked;