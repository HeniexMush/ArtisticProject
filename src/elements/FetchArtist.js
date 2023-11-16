const FetchArtist = (setArtistData, artistId) => {
    
    const fetchArtist = () => {
        fetch(`https://api.artic.edu/api/v1/artists/${artistId}?fields=title,description,birth_date,death_date`)
        .then(response=>response.json())
        .then(data => {
          setArtistData([data.data]);
          console.log(data.data);
        })
        .catch(error => {
          console.error('Error fetching Api data:', error);
        });
    return fetchArtist;
    }
}

export default FetchArtist;