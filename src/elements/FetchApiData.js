

const FetchApiData = (setApiData, setCurrentPage, currentPage, setIsLoading, setIsEndListReached) => {
    
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=15&fields=title,id,image_id,date_start,date_end,dimensions,artist_title,description`);
            const data = await response.json();

            setApiData((prevData) => [...prevData, ...data.data]);
            setCurrentPage(currentPage + 1);
            console.log(data.data);

        } catch (error) {
            console.error("Error while trying to acces the api data:", error);
        } finally {
            setIsEndListReached(false);
            setIsLoading(false);
        }
    }
    return fetchData;
}

export default FetchApiData;