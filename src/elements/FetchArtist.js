//fetch data about an artist
const FetchArtist = async (artistId) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artists/${artistId}?fields=title,description,birth_date,death_date`);
    const data = await response.json();
    console.log(data.data);
    return data.data;

  } catch (error) {
    console.error("Error while trying to access the API data:", error);
    throw error;

  }
};

export default FetchArtist;