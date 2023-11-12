

const FetchApiData = (setApiData, setCurrentPage, setIsLoading, setIsEndReached) => {
    
    const fetchData = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=30&fields=title,id,image_id`);
            const data = await response.json();

            setApiData((prevData) => [...prevData, ...data.data]);
            setCurrentPage(currentPage + 1);
            setIsEndReached(false);
            console.log(data.data);


        } catch (error) {
            console.error("Error while trying to acces the api data:", error);
        } finally {
            setIsLoading(false);
        }
    }
    return fetchData;
}

export default FetchApiData;
