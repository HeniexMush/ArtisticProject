const FetchDetailData = (itemId, setDetailData) => {

    const fetchDetails = () => {
        fetch(`https://api.artic.edu/api/v1/artworks/${itemId}?fields=title,date_display,image_id,dimensions,artist_title`)
        .then(response=>response.json())
        .then(data => {
          setDetailData(data.data);
          console.log(data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }
      return fetchDetails
}

export default FetchDetailData